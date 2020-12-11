M:10000;F:".";E:"L";O:"#"
i:0:"10_ex.txt";W:#*i;H:#i
c:1-!3;N:{(~x=)#{x,y}/x+{x+c}'c*W}
A:{(i@W div x)@H mod x}
C:{0 {y+x=A[z]}[y]/N[x]}
{$[A[x]="L" & C[x;"#"]=0;"#";$[A[x]="#" & C[x;"#"]>3;"L";A[x]]]}'!(W*H)
