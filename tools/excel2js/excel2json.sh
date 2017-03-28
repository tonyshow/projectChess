#!/bin/sh
rm -r -f out
mkdir out/
python excel2json.py

echo 按任意键继续
read -n 1