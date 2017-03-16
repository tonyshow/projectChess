#coding:utf-8 
import time
import codecs
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
import os
import glob
import xlrd
import re 
import codecs
import json
dir='./in'			#Դ�ļ��洢Ŀ¼
outPath='./out/' 	#Ŀ���ļ��洢Ŀ¼
dataTypeLine = 1    #����������
indexLine = 2		#������������
fileNameList=[];	#存储所以文件的名字
jsonConfig=json.loads('{"Compose":{"uid":"needRoleQuality","conformityDatas":"newRoleId,rate"}}');
jsFileBf = 'Plan'
#===================================================================================================
def isNumber(str):
	try:
		v = float(str);
		return True;
	except ValueError:
		return False;

#===================================================================================================		
def GetLineData( dataList ):
	temp_ss = '['
	num=0;
	for key,value in dataList.items():		 
		if(isNumber(value)==False):
			value='"'+value+'"'; 
		if(num==0):
			temp_ss+=value;
		else:
			temp_ss+=(','+value);
		num+=1;	
		
		
	temp_ss += ']'  
	return temp_ss;

#===================================================================================================	
def delete_file_folder(src): 
    if os.path.isfile(src):  
        try:  
            os.remove(src)  
        except:  
            pass 
    elif os.path.isdir(src):  
        for item in os.listdir(src):  
            itemsrc=os.path.join(src,item)  
            delete_file_folder(itemsrc)  
        try:  
            os.rmdir(src)  
        except:  
            pass 	

#===================================================================================================		
def removeFileInFirstDir(targetDir): 
	for file in os.listdir(targetDir): 
		targetFile = os.path.join(targetDir,  file)
		if os.path.isfile(targetFile):
			os.remove(targetFile)
		else:
			delete_file_folder(targetFile)


 
#===================================================================================================
def doNextLine( strData ):
	return (strData+'\n\n');
def doNextOneLine( strData ):
	return (strData+'\n');
#===================================================================================================
def DelLastChar(str):
    str_list=list(str)
    str_list.pop()
    return "".join(str_list)
def getValue(value):
	value = str(value)
	value = re.sub('\.0*$', "", value);
	return value;

def CreateCodeLog(wb,sheetName ,txtFile):
	tmp = '\n';
	sheet = wb.sheet_by_name(sheetName);
	for rownum in range(sheet.nrows):
		if(int(rownum)>2):			
			for ncol in range( sheet.ncols ):		
				getCurrValue = sheet.cell(rownum, ncol).value;
				getCurrValue =  getValue(getCurrValue); 								
				if( ncol == 2 ):	
					tmp+='	'+getCurrValue+':'
				elif( ncol == 3 ):	
					tmp+='"'+getCurrValue+'",\n'
	tmp=DelLastChar(tmp);tmp=DelLastChar(tmp);
	tmp+='\n'
	txtFile.write( tmp ); 
	
def CreateCode(wb,sheetName ,txtFile):
	tmp = '';
	sheet = wb.sheet_by_name(sheetName);
	oldModule=''
	singeServer=0
	for rownum in range(sheet.nrows):
		if(int(rownum)>2):
			isPublic = False; 			
			for ncol in range( sheet.ncols ):		
				getCurrValue = sheet.cell(rownum, ncol).value;
				getCurrValue =  getValue(getCurrValue);
				if( ncol <= 3 ):										
					if( ncol == 0 ):												
						isPublic = getCurrValue=='public'; 					
					if(isPublic == True):
						if(ncol ==1  ):						
							tmp+= '\n	'+getCurrValue+' : ';
						if(ncol==2  ):						
							tmp+= getCurrValue+',';
						if(ncol==3  ):						
							tmp+= '	//'+getCurrValue+';';	
					else:
						if(ncol ==0):	
							if( oldModule != getCurrValue ):
								singeServer=singeServer+1;
								if(singeServer>1):
									tmp+= '\n	},\n\n	'+getCurrValue+':{';
								else:
									tmp+= '\n\n	'+getCurrValue+':{';
						elif(ncol ==1  ):						
							tmp+= '\n		'+getCurrValue+' : ';
						elif(ncol==2  ):						
							tmp+= getCurrValue+',';
						elif(ncol==3  ):						
							tmp+= '	//'+getCurrValue+';';
				if( ncol == 0 ):
					oldModule = getCurrValue;
	txtFile.write( tmp );
	txtFile.write( '\n	}' );
#===================================================================================================	
#src 			: elsx 所在的相对路径	 ( ./in/xxx.xlsx )
#chinesName		：elsx 文件名字			 ( Hxxx )
#dst			: 文件输出位置			 ( .\out )
def createJsFile(src , chinesName , dst ): 	

	allWb = xlrd.open_workbook(src);
	 
	 
	DataName = allWb.sheet_names()[0];   
	

	
	if( DataName!='code' ):
		return;	

	#-------------------------------------------------------------
	#创建文件
	fullTxtPath = outPath + '\\' + DataName + '.js';
	txtFile = open(fullTxtPath, 'wb+')
	txtFile.read().decode("utf-8")
	
	#添加require文件
	
	txtFile.write( "module.exports = {" );	
	CreateCode(allWb,DataName,txtFile);
	txtFile.write( "\n" );	 
	txtFile.write( "};\n\n" );	 	 	
	txtFile.close();

	fullTxtPath = outPath + '\\' + DataName + 'Log.js';
	txtFile = open(fullTxtPath, 'wb+')
	txtFile.read().decode("utf-8")
	
	#添加require文件
	
	txtFile.write( "var codeLog = module.exports = {" );	
	CreateCodeLog(allWb,DataName,txtFile);	
	txtFile.write( "};\n\n" );	
	txtFile.write( "codeLog.info = function( code ){\n" );
	txtFile.write( "	code = parseInt(code);\n" );
	txtFile.write( "	console.log('code : %s  注释 ：%s ',code,this[code] );\n" );
	txtFile.write( "};\n" );	
	txtFile.close();

#===================================================================================================	
def file_folder(src, dst):  
	
	if os.path.isfile(src):  
		try:	
			outFilePath = src
			outFilePath = outFilePath.replace('\\','/') 
			src = src.replace('\\','/')  
			listFolder = outFilePath.split("/")
			length = len(listFolder)-1;
			fileName_xlsx = listFolder[length]; 
			fileName = (fileName_xlsx.split("."))[0];
			createJsFile(  src, fileName, dst  );				
		except:
			pass
	elif os.path.isdir(src): 
		for item in os.listdir(src):
			itemsrc=os.path.join(src,item)
			file_folder(itemsrc, dst)		
	
#===================================================================================================
def main(): 
	if len(sys.argv) < 3:
		print 'lack of arg'
		return
	dir = sys.argv[1]
	outPath = sys.argv[2]
	
	if  (os.path.exists(dir)):
		sjdghg = ''
	else:
		os.mkdir( dir )
		
	if  (os.path.exists(outPath)):
		sjdghg = ''
	else:
		os.mkdir( outPath ) 
	removeFileInFirstDir(outPath) 
	file_folder(dir, outPath);
	 
if __name__ == '__main__':
	main()