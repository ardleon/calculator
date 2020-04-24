#!/bin/sh
echo "Type the path to your script(separated by a dot), followed by [ENTER]:"
read -p 'script path: ' userPath

path=${userPath//[\.]/\/}
cssId=${userPath//[\.]/-}
IFS='/' read -r -a array <<< "$path"
lastElement="${array[${#array[@]}-1]}"
mkdir -p $path
cd $path
orig=$path
package=${orig//[\/]/.}
len=${#array[@]};

globalScssPath='../';
for ((i=0;i<$len-1;i+=1)); do
    globalScssPath+='../';
done
globalScssPath+='variables.scss';

## css
touch $lastElement".scss"
echo "@import '"$globalScssPath"';"     >> $lastElement".scss"
echo "#"$cssId"{"                       >> $lastElement".scss"
echo "  color: #000000" >> $lastElement".scss"
echo "}"                                >> $lastElement".scss"

## component
touch $lastElement".js"
echo "import React, {useState} from 'react';"       >> $lastElement".js"
echo "import './"$lastElement".scss';"              >> $lastElement".js"
echo "function "$lastElement"(props){"              >> $lastElement".js"
echo "  const [oneProp, setOneProp] = useState(0);" >> $lastElement".js"
echo "  return("                                    >> $lastElement".js"
echo "    <div id='"$cssId"'>"                      >> $lastElement".js"
echo "    "$lastElement" Component."                >> $lastElement".js"
echo "    </div>"                                   >> $lastElement".js"
echo "  );"                                         >> $lastElement".js"
echo "}"                                            >> $lastElement".js"
echo "export default "$lastElement";"               >> $lastElement".js"