rm -r -f out
mkdir out/
python doCodeJs.py 
cp -pr out/code.js ./../../servers/shared/
cp -pr out/codeLog.js ./../../nodeClient/script/
echo ' 	all is ok !!! '

echo 按任意键继续
read -n 1