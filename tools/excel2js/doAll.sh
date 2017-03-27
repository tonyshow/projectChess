#!/bin/sh
rm -r -f out
mkdir out/

echo '==================================================================================================='
echo ' 					excel to js start ... '
echo '==================================================================================================='
echo ''
echo ''
echo ''
python excel2json.py
echo '==================================================================================================='
echo ' 					cp js to  '
echo '==================================================================================================='
echo ''
echo ''
echo ''
#将转好的表 拷贝到目标目录
#cp -pr out/*.js ./../../assets/Script/MgData/PlanData


python doCodeJs.py
cp -pr out/code.js ./../

echo ''
echo ''
echo ' 	all is ok !!! '
echo ' 	all is ok !!! '
echo ' 	all is ok !!! '

echo 按任意键继续
read -n 1