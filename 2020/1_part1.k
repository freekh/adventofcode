a:`i$'0:"1_input.txt" /funny: `i$"0" is wrong `i$$"0" is right
f:{[c]0b {[c;p;b]$[~p;$[(b+c)=2020;b*c;p];p]}[c]/a}
0b {[p;c]$[~p;f[c];p]}/a 
