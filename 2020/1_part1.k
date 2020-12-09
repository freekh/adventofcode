i:`i$'0:"1_input.txt"
r:{[f]0 {[f;p;c]$[~p;f[c];p]}[f]/i} / reduce util (will iterate more than necessary)
u:{[f] *(~0=)#f'i} / better than r: find first (seems slow: not sure if f'i is lazy?)
u[{u[{$[(x+y)=2020;x*y;0]}[x]]}] / readable-ish
u[{u[{*&~2020-+}]}]
