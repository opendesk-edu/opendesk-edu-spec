<
!
-
-


S
P
D
X
-
F
i
l
e
C
o
p
y
r
i
g
h
t
T
e
x
t
:
 
2
0
2
6
 
o
p
e
n
D
e
s
k
 
E
d
u
 
C
o
n
t
r
i
b
u
t
o
r
s


S
P
D
X
-
L
i
c
e
n
s
e
-
I
d
e
n
t
i
f
i
e
r
:
 
A
p
a
c
h
e
-
2
.
0


-
-
>




#
 
O
p
e
r
a
t
i
o
n
s
 
&
 
R
u
n
b
o
o
k
s




#
#
 
P
u
r
p
o
s
e




O
p
e
r
a
t
i
o
n
a
l
 
p
r
o
c
e
d
u
r
e
s
 
f
o
r
 
c
o
m
m
o
n
 
t
a
s
k
s
:
 
D
B
 
p
a
s
s
w
o
r
d
 
s
y
n
c
,
 
i
n
g
r
e
s
s
 
c
e
r
t
i
f
i
c
a
t
e


r
o
t
a
t
i
o
n
,
 
b
a
c
k
u
p
 
r
e
s
t
o
r
e
 
(
R
W
O
 
P
V
C
s
)
,
 
K
e
y
c
l
o
a
k
 
f
a
i
l
o
v
e
r
,
 
a
n
d
 
b
a
c
k
u
p
 
s
c
h
e
d
u
l
e


c
h
e
c
k
s
.
 
E
a
c
h
 
r
u
n
b
o
o
k
 
d
e
f
i
n
e
s
 
p
r
e
c
o
n
d
i
t
i
o
n
s
,
 
s
t
e
p
s
,
 
a
n
d
 
r
o
l
l
b
a
c
k
.




#
#
 
N
o
n
-
G
o
a
l
s




-
 
D
a
y
-
1
 
d
e
p
l
o
y
m
e
n
t
 
(
c
o
v
e
r
e
d
 
i
n
 
[
D
e
p
l
o
y
m
e
n
t
]
(
.
/
d
e
p
l
o
y
m
e
n
t
/
)
)


-
 
C
o
m
m
i
s
s
i
o
n
i
n
g
 
n
e
w
 
n
o
d
e
s
 
(
H
R
Z
 
o
p
e
r
a
t
i
o
n
s
)


-
 
D
a
t
a
b
a
s
e
 
s
c
h
e
m
a
 
m
i
g
r
a
t
i
o
n
s
 
(
a
p
p
l
i
c
a
t
i
o
n
-
s
p
e
c
i
f
i
c
,
 
s
e
e
 
s
e
r
v
i
c
e
 
s
p
e
c
s
)




#
#
 
R
u
n
b
o
o
k
:
 
K
e
y
c
l
o
a
k
 
T
o
k
e
n
 
V
a
l
i
d
a
t
i
o
n
 
F
a
i
l
u
r
e




#
#
#
 
S
c
e
n
a
r
i
o
:
 
K
e
y
c
l
o
a
k
 
f
a
i
l
s
 
t
o
 
v
a
l
i
d
a
t
e
 
u
s
e
r
 
t
o
k
e
n
s
 
(
i
n
v
a
l
i
d
 
J
W
T
 
m
i
s
m
a
t
c
h
)




*
*
S
y
m
p
t
o
m
s
:
*
*


-
 
U
s
e
r
s
 
c
a
n
n
o
t
 
l
o
g
 
i
n
 
t
o
 
a
n
y
 
s
e
r
v
i
c
e
 
(
a
l
l
 
O
I
D
C
/
S
A
M
L
 
f
a
i
l
)


-
 
K
e
y
c
l
o
a
k
 
l
o
g
s
 
s
h
o
w
 
`
I
n
v
a
l
i
d
 
J
W
T
`
 
o
r
 
`
S
i
g
n
a
t
u
r
e
 
v
e
r
i
f
i
c
a
t
i
o
n
 
f
a
i
l
e
d
`


-
 
A
l
l
 
e
n
t
r
y
 
p
o
r
t
a
l
s
 
(
N
u
b
u
s
 
P
o
r
t
a
l
,
 
d
i
r
e
c
t
 
s
e
r
v
i
c
e
 
l
o
g
i
n
)
 
r
e
t
u
r
n
 
4
0
1
 
U
n
a
u
t
h
o
r
i
z
e
d




*
*
R
o
o
t
 
C
a
u
s
e
:
*
*
 
K
e
y
c
l
o
a
k
 
d
a
t
a
b
a
s
e
 
c
o
r
r
u
p
t
i
o
n
 
o
r
 
k
e
y
 
r
o
t
a
t
i
o
n
 
o
u
t
a
g
e
.




*
*
S
t
e
p
s
 
t
o
 
R
e
s
o
l
v
e
:
*
*




1
.
 
*
*
V
e
r
i
f
y
 
K
e
y
c
l
o
a
k
 
h
e
a
l
t
h
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
e
x
e
c
 
-
t
i
 
p
o
d
s
 
-
l
 
c
o
m
p
o
n
e
n
t
=
k
e
y
c
l
o
a
k
 
-
-
 
\


 
 
 
 
 
s
h
 
-
c
 
"
c
u
r
l
 
-
s
 
h
t
t
p
:
/
/
l
o
c
a
l
h
o
s
t
:
8
0
8
0
/
h
e
a
l
t
h
/
l
i
v
e
"


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
e
x
e
c
 
-
t
i
 
p
o
d
s
 
-
l
 
c
o
m
p
o
n
e
n
t
=
k
e
y
c
l
o
a
k
 
-
-
 
\


 
 
 
 
 
s
h
 
-
c
 
"
c
u
r
l
 
-
s
 
h
t
t
p
:
/
/
l
o
c
a
l
h
o
s
t
:
8
0
8
0
/
h
e
a
l
t
h
/
r
e
a
d
y
"


 
 
 
`
`
`


 
 
 
E
x
p
e
c
t
e
d
:
 
`
2
0
0
 
O
K
`
 
(
b
o
t
h
)




2
.
 
*
*
C
h
e
c
k
 
K
e
y
c
l
o
a
k
 
l
o
g
s
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
l
o
g
s
 
-
l
 
c
o
m
p
o
n
e
n
t
=
k
e
y
c
l
o
a
k
 
-
-
t
a
i
l
=
1
0
0


 
 
 
`
`
`


 
 
 
L
o
o
k
 
f
o
r
:
 
`
j
a
v
a
.
s
e
c
u
r
i
t
y
.
S
i
g
n
a
t
u
r
e
E
x
c
e
p
t
i
o
n
`
,
 
`
J
W
T
 
v
a
l
i
d
a
t
i
o
n
 
f
a
i
l
e
d
`




3
.
 
*
*
I
f
 
J
W
T
 
k
e
y
 
m
i
s
m
a
t
c
h
:
*
*
 
R
o
l
l
b
a
c
k
 
K
e
y
c
l
o
a
k
 
d
e
p
l
o
y
m
e
n
t
 
t
o
 
p
r
e
v
i
o
u
s
 
v
e
r
s
i
o
n
 
(
a
v
o
i
d
s
 
k
e
y
 
r
o
t
a
t
i
o
n
)


 
 
 
`
`
`
b
a
s
h


 
 
 
h
e
l
m
f
i
l
e
 
-
e
 
d
e
f
a
u
l
t
 
r
o
l
l
b
a
c
k
 
-
-
r
e
l
e
a
s
e
 
k
e
y
c
l
o
a
k


 
 
 
`
`
`




4
.
 
*
*
I
f
 
d
a
t
a
b
a
s
e
 
c
o
r
r
u
p
t
i
o
n
:
*
*
 
R
e
s
t
o
r
e
 
f
r
o
m
 
l
a
t
e
s
t
 
b
a
c
k
u
p
 
(
k
8
u
p
 
R
W
O
 
b
a
c
k
u
p
 
f
r
o
m
 
0
0
:
4
2
 
U
T
C
)


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
p
a
t
c
h
 
p
o
d
 
k
e
y
c
l
o
a
k
-
0
 
-
p
 
'
{
"
s
p
e
c
"
:
{
"
 
P
o
d
M
a
n
a
g
e
m
e
n
t
P
o
l
i
c
y
"
:
"
O
r
d
e
r
e
d
R
e
a
d
y
"
}
}
}
'


 
 
 
k
u
b
e
c
t
l
 
c
r
e
a
t
e
 
-
f
 
k
8
u
p
-
r
e
s
t
o
r
e
-
k
e
y
c
l
o
a
k
.
y
a
m
l
 
(
R
e
s
t
o
r
e
 
f
r
o
m
 
S
3
 
b
a
c
k
u
p
)


 
 
 
`
`
`




5
.
 
*
*
V
e
r
i
f
y
 
t
o
k
e
n
 
v
a
l
i
d
a
t
i
o
n
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
#
 
T
e
s
t
 
v
i
a
 
c
u
r
l
 
w
i
t
h
 
k
n
o
w
n
 
c
l
i
e
n
t


 
 
 
c
u
r
l
 
-
X
 
P
O
S
T
 
h
t
t
p
s
:
/
/
k
e
y
c
l
o
a
k
.
o
p
e
n
d
e
s
k
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e
/
r
e
a
l
m
s
/
o
p
e
n
d
e
s
k
/
p
r
o
t
o
c
o
l
/
o
p
e
n
i
d
-
c
o
n
n
e
c
t
/
t
o
k
e
n
 
\


 
 
 
 
 
-
d
 
"
c
l
i
e
n
t
_
i
d
=
o
p
e
n
d
e
s
k
-
n
e
x
t
c
l
o
u
d
"
 
\


 
 
 
 
 
-
d
 
"
g
r
a
n
t
_
t
y
p
e
=
c
l
i
e
n
t
_
c
r
e
d
e
n
t
i
a
l
s
"
 
\


 
 
 
 
 
-
d
 
"
c
l
i
e
n
t
_
s
e
c
r
e
t
=
<
o
p
a
q
u
e
-
c
l
i
e
n
t
-
s
e
c
r
e
t
>
"


 
 
 
`
`
`


 
 
 
E
x
p
e
c
t
e
d
:
 
`
2
0
0
 
O
K
`
 
w
i
t
h
 
v
a
l
i
d
 
`
a
c
c
e
s
s
_
t
o
k
e
n
`




*
*
R
o
l
l
b
a
c
k
:
*
*
 
R
e
s
t
o
r
e
 
K
e
y
c
l
o
a
k
 
t
o
 
p
r
e
v
i
o
u
s
 
H
e
l
m
 
r
e
l
e
a
s
e
 
v
e
r
s
i
o
n
.




#
#
 
R
u
n
b
o
o
k
:
 
M
a
r
i
a
D
B
 
P
a
s
s
w
o
r
d
 
S
y
n
c
h
r
o
n
i
z
a
t
i
o
n




#
#
#
 
S
c
e
n
a
r
i
o
:
 
H
e
l
m
-
d
e
p
l
o
y
e
d
 
M
a
r
i
a
D
B
 
p
a
s
s
w
o
r
d
 
d
o
e
s
 
N
O
T
 
m
a
t
c
h
 
r
u
n
n
i
n
g
 
i
n
s
t
a
n
c
e




*
*
S
y
m
p
t
o
m
s
:
*
*


-
 
S
e
r
v
i
c
e
 
p
o
d
s
 
c
a
n
n
o
t
 
c
o
n
n
e
c
t
 
t
o
 
M
a
r
i
a
D
B
:
 
`
S
Q
L
S
T
A
T
E
[
H
Y
0
0
0
]
 
[
2
0
0
2
]
 
C
o
n
n
e
c
t
i
o
n
 
r
e
f
u
s
e
d
`


-
 
`
h
e
l
m
f
i
l
e
 
s
y
n
c
`
 
s
h
o
w
s
 
a
 
d
i
f
f
e
r
e
n
t
 
p
a
s
s
w
o
r
d
 
i
n
 
v
a
l
u
e
s
 
v
s
.
 
r
u
n
n
i
n
g
 
m
a
r
i
a
d
b
 
C
o
n
t
a
i
n
e
r




*
*
R
o
o
t
 
C
a
u
s
e
:
 
H
e
l
m
 
g
e
n
e
r
a
t
e
s
 
n
e
w
 
p
a
s
s
w
o
r
d
 
o
n
 
e
a
c
h
 
u
p
g
r
a
d
e
,
 
b
u
t
 
M
a
r
i
a
D
B
 
r
e
t
a
i
n
s
 
o
r
i
g
i
n
a
l
 
p
a
s
s
w
o
r
d
.




*
*
S
t
e
p
s
 
t
o
 
R
e
s
o
l
v
e
:
*
*




1
.
 
*
*
G
e
t
 
c
u
r
r
e
n
t
 
M
a
r
i
a
D
B
 
r
o
o
t
 
p
a
s
s
w
o
r
d
 
f
r
o
m
 
r
u
n
n
i
n
g
 
c
o
n
t
a
i
n
e
r
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
e
x
e
c
 
-
t
i
 
p
o
d
s
 
-
l
 
c
o
m
p
o
n
e
n
t
=
m
a
r
i
a
d
b
 
-
-
 
e
n
v
 
|
 
g
r
e
p
 
M
Y
S
Q
L
_
R
O
O
T
_
P
A
S
S
W
O
R
D


 
 
 
`
`
`


 
 
 
E
x
a
m
p
l
e
:
 
`
M
Y
S
Q
L
_
R
O
O
T
_
P
A
S
S
W
O
R
D
=
x
y
z
7
8
9
`




2
.
 
*
*
U
p
d
a
t
e
 
H
e
l
m
 
v
a
l
u
e
s
 
t
o
 
m
a
t
c
h
 
r
u
n
n
i
n
g
 
p
a
s
s
w
o
r
d
:
*
*


 
 
 
`
`
`
y
a
m
l


 
 
 
#
 
h
e
l
m
f
i
l
e
/
e
n
v
i
r
o
n
m
e
n
t
s
/
d
e
f
a
u
l
t
/
s
e
c
r
e
t
s
.
y
a
m
l
.
g
o
t
m
p
l


 
 
 
d
a
t
a
b
a
s
e
s
:


 
 
 
 
 
n
e
x
t
c
l
o
u
d
:


 
 
 
 
 
 
 
p
a
s
s
w
o
r
d
:
 
x
y
z
7
8
9
 
 
#
 
U
p
d
a
t
e
 
t
o
 
m
a
t
c
h
 
r
u
n
n
i
n
g
 
c
o
n
t
a
i
n
e
r


 
 
 
 
 
o
p
e
n
c
l
o
u
d
:


 
 
 
 
 
 
 
p
a
s
s
w
o
r
d
:
 
x
y
z
7
8
9


 
 
 
`
`
`




3
.
 
*
*
A
p
p
l
y
 
v
a
l
u
e
s
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
h
e
l
m
f
i
l
e
 
-
e
 
d
e
f
a
u
l
t
 
a
p
p
l
y


 
 
 
`
`
`




4
.
 
*
*
V
e
r
i
f
y
 
p
a
s
s
w
o
r
d
 
s
y
n
c
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
l
o
g
s
 
-
l
 
c
o
m
p
o
n
e
n
t
=
m
a
r
i
a
d
b
 
-
-
t
a
i
l
=
2
0
 
|
 
g
r
e
p
 
"
p
a
s
s
w
o
r
d
 
m
a
t
c
h
e
d
"


 
 
 
`
`
`


 
 
 
E
x
p
e
c
t
e
d
:
 
`
P
a
s
s
w
o
r
d
 
m
a
t
c
h
e
d
!
 
(
n
o
 
A
L
T
 
U
S
E
R
)
`




*
*
P
r
e
v
e
n
t
i
o
n
:
*
*
 
I
n
 
f
u
t
u
r
e
 
u
p
g
r
a
d
e
s
,
 
v
e
r
i
f
y
 
p
a
s
s
w
o
r
d
 
s
y
n
c
 
B
E
F
O
R
E
 
`
h
e
l
m
f
i
l
e
 
a
p
p
l
y
`
.




#
#
 
R
u
n
b
o
o
k
:
 
I
n
g
r
e
s
s
 
C
e
r
t
i
f
i
c
a
t
e
 
R
o
t
a
t
i
o
n




#
#
#
 
S
c
e
n
a
r
i
o
:
 
T
L
S
 
c
e
r
t
i
f
i
c
a
t
e
 
e
x
p
i
r
e
s
 
o
r
 
n
e
e
d
s
 
r
e
p
l
a
c
e
m
e
n
t




*
*
S
y
m
p
t
o
m
s
:
*
*


-
 
B
r
o
w
s
e
r
 
s
h
o
w
s
 
`
N
E
T
:
:
E
R
R
_
C
E
R
T
_
D
A
T
E
_
I
N
V
A
L
I
D
`
 
o
r
 
`
C
E
R
T
_
A
U
T
H
O
R
I
T
Y
_
I
N
V
A
L
I
D
`


-
 
S
e
r
v
i
c
e
s
 
r
e
t
u
r
n
 
5
0
3
 
B
a
d
 
G
a
t
e
w
a
y
 
f
o
r
 
H
T
T
P
S
 
r
e
q
u
e
s
t
s




*
*
R
o
o
t
 
C
a
u
s
e
:
*
*
 
L
e
t
'
s
 
E
n
c
r
y
p
t
 
c
e
r
t
i
f
i
c
a
t
e
 
e
x
p
i
r
e
d
 
o
r
 
i
n
s
t
i
t
u
t
i
o
n
a
l
 
c
e
r
t
i
f
i
c
a
t
e
.




*
*
S
t
e
p
s
 
t
o
 
R
e
s
o
l
v
e
:
*
*




1
.
 
*
*
C
h
e
c
k
 
c
e
r
t
i
f
i
c
a
t
e
 
e
x
p
i
r
a
t
i
o
n
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
g
e
t
 
s
e
c
r
e
t
 
o
p
e
n
d
e
s
k
-
c
e
r
t
i
f
i
c
a
t
e
s
-
t
l
s
 
-
o
 
j
s
o
n
p
a
t
h
=
'
{
.
d
a
t
a
.
t
l
s
\
.
c
r
t
}
'
 
|
 
b
a
s
e
6
4
 
-
d
 
|
 
o
p
e
n
s
s
l
 
x
5
0
9
 
-
n
o
o
u
t
 
-
d
a
t
e
s


 
 
 
`
`
`


 
 
 
E
x
p
e
c
t
e
d
:
 
`
n
o
t
A
f
t
e
r
`
 
>
 
N
o
w
 
(
m
o
r
e
 
t
h
a
n
 
3
0
 
d
a
y
s
)
.




2
.
 
*
*
F
o
r
 
L
e
t
'
s
 
E
n
c
r
y
p
t
:
*
*
 
R
e
n
e
w
 
v
i
a
 
c
e
r
t
-
m
a
n
a
g
e
r
 
(
a
u
t
o
m
a
t
i
c
,
 
o
r
 
m
a
n
u
a
l
)


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
a
n
n
o
t
a
t
e
 
C
e
r
t
i
f
i
c
a
t
e
 
o
p
e
n
d
e
s
k
-
c
e
r
t
i
f
i
c
a
t
e
s
-
t
l
s
 
\


 
 
 
 
 
c
e
r
t
-
m
a
n
a
g
e
r
.
i
o
/
i
s
s
u
e
-
t
e
m
p
o
r
a
r
y
-
c
e
r
t
i
f
i
c
a
t
e
=
"
f
a
l
s
e
"


 
 
 
k
u
b
e
c
t
l
 
d
e
l
e
t
e
 
c
e
r
t
c
e
r
t
 
o
p
e
n
d
e
s
k
-
c
e
r
t
i
f
i
c
a
t
e
s
-
t
l
s
 
 
#
 
I
s
s
u
e
 
r
e
-
i
s
s
u
e


 
 
 
`
`
`




3
.
 
*
*
F
o
r
 
i
n
s
t
i
t
u
t
i
o
n
a
l
 
c
e
r
t
i
f
i
c
a
t
e
:
*
*


 
 
 
-
 
U
p
d
a
t
e
 
K
u
b
e
r
n
e
t
e
s
 
s
e
c
r
e
t
 
w
i
t
h
 
n
e
w
 
c
e
r
t
i
f
i
c
a
t
e
:


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
c
r
e
a
t
e
 
s
e
c
r
e
t
 
t
l
s
 
o
p
e
n
d
e
s
k
-
c
e
r
t
i
f
i
c
a
t
e
s
-
t
l
s
 
\


 
 
 
 
 
-
-
c
e
r
t
=
/
p
a
t
h
/
t
o
/
n
e
w
.
c
r
t
 
-
-
k
e
y
=
/
p
a
t
h
/
t
o
/
n
e
w
.
k
e
y
 
-
-
d
r
y
-
r
u
n
=
c
l
i
e
n
t
 
-
o
 
y
a
m
l
 
|
 
k
u
b
e
c
t
l
 
a
p
p
l
y
 
-
f
 
-


 
 
 
`
`
`


 
 
 
-
 
O
r
 
u
s
e
 
`
h
e
l
m
f
i
l
e
/
f
i
l
e
s
/
c
e
r
t
i
f
i
c
a
t
e
s
/
n
e
w
.
c
r
t
`
 
a
n
d
 
u
p
d
a
t
e
 
`
c
e
r
t
i
f
i
c
a
t
e
s
.
y
a
m
l
.
g
o
t
m
p
l
`




4
.
 
*
*
V
e
r
i
f
y
 
n
e
w
 
c
e
r
t
i
f
i
c
a
t
e
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
c
u
r
l
 
-
I
 
h
t
t
p
s
:
/
/
p
o
r
t
a
l
.
o
p
e
n
d
e
s
k
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e


 
 
 
`
`
`


 
 
 
E
x
p
e
c
t
e
d
:
 
`
2
0
0
 
O
K
`
 
w
i
t
h
 
v
a
l
i
d
 
c
e
r
t
i
f
i
c
a
t
e
 
c
h
a
i
n
.




*
*
R
o
l
l
b
a
c
k
:
*
*
 
R
e
s
t
o
r
e
 
p
r
e
v
i
o
u
s
 
c
e
r
t
i
f
i
c
a
t
e
 
f
r
o
m
 
s
e
c
r
e
t
 
b
a
c
k
u
p
 
(
i
f
 
`
k
u
b
e
c
t
l
`
 
s
u
c
c
e
e
d
e
d
 
b
u
t
 
c
e
r
t
 
i
s
 
i
n
v
a
l
i
d
)
.




#
#
 
R
u
n
b
o
o
k
:
 
P
o
s
t
g
r
e
S
Q
L
 
P
V
C
 
B
a
c
k
u
p
/
R
e
s
t
o
r
e
 
(
R
W
O
)




#
#
#
 
S
c
e
n
a
r
i
o
:
 
P
o
s
t
g
r
e
S
Q
L
 
R
W
O
 
P
V
C
 
c
o
r
r
u
p
t
e
d
 
o
r
 
d
a
t
a
 
l
o
s
s




*
*
S
y
m
p
t
o
m
s
:
*
*


-
 
P
o
s
t
g
r
e
S
Q
L
 
p
o
d
s
 
f
a
i
l
 
t
o
 
s
t
a
r
t
 
(
C
r
a
s
h
L
o
o
p
B
a
c
k
O
f
f
)


-
 
`
k
u
b
e
c
t
l
 
d
e
s
c
r
i
b
e
 
p
o
d
`
 
s
h
o
w
s
 
P
V
C
 
m
o
u
n
t
i
n
g
 
e
r
r
o
r
 
(
f
a
i
l
e
d
 
t
o
 
a
t
t
a
c
h
 
`
d
a
t
a
-
p
o
s
t
g
r
e
s
q
l
-
0
`
)




*
*
R
o
o
t
 
C
a
u
s
e
:
*
*
 
R
W
O
 
P
V
C
 
d
a
t
a
 
c
o
r
r
u
p
t
i
o
n
 
-
 
b
a
c
k
u
p
s
 
a
r
e
 
N
O
T
 
i
n
c
l
u
d
e
d
 
i
n
 
m
a
i
n
 
k
8
u
p
 
s
c
h
e
d
u
l
e


(
R
W
O
 
P
V
C
s
 
h
a
v
e
 
`
k
8
u
p
.
i
o
/
e
x
c
l
u
d
e
:
 
"
t
r
u
e
"
`
 
t
o
 
p
r
e
v
e
n
t
 
b
a
c
k
u
p
 
j
o
b
 
h
a
n
g
)
.




*
*
S
t
e
p
s
 
t
o
 
R
e
s
o
l
v
e
:
*
*




1
.
 
*
*
C
h
e
c
k
 
l
a
t
e
s
t
 
P
o
s
t
g
r
e
S
Q
L
 
b
a
c
k
u
p
 
i
n
 
S
3
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
r
c
l
o
n
e
 
c
o
n
f
i
g
 
c
o
n
f
i
g
 
c
r
e
a
t
e
 
h
r
z
-
s
3
 
s
3
 
p
r
o
v
i
d
e
r
 
S
3
 
\


 
 
 
 
 
e
n
d
p
o
i
n
t
 
h
t
t
p
s
:
/
/
s
3
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e
/
b
a
c
k
u
p
s
 
\


 
 
 
 
 
a
c
c
e
s
s
_
k
e
y
_
i
d
 
<
o
p
a
q
u
e
-
a
c
c
e
s
s
-
k
e
y
>
 
s
e
c
r
e
t
_
a
c
c
e
s
s
_
k
e
y
 
<
o
p
a
q
u
e
-
s
e
c
r
e
t
-
k
e
y
>


 
 
 
r
c
l
o
n
e
 
l
s
 
h
r
z
-
s
3
:
b
a
c
k
u
p
s
/
 
|
 
g
r
e
p
 
p
o
s
t
g
r
e
s
q
l
 
|
 
s
o
r
t
 
-
r
 
|
 
h
e
a
d
 
-
5


 
 
 
`
`
`




2
.
 
*
*
R
e
s
t
o
r
e
 
f
r
o
m
 
l
a
t
e
s
t
 
b
a
c
k
u
p
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
#
 
C
r
e
a
t
e
 
R
e
s
t
o
r
e
 
r
e
s
o
u
r
c
e


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
c
r
e
a
t
e
 
-
f
 
-
 
<
<
E
O
F


 
 
 
a
p
i
V
e
r
s
i
o
n
:
 
k
8
u
p
.
i
o
/
v
1


 
 
 
k
i
n
d
:
 
R
e
s
t
o
r
e


 
 
 
m
e
t
a
d
a
t
a
:


 
 
 
 
 
n
a
m
e
:
 
r
e
s
t
o
r
e
-
p
o
s
t
g
r
e
s
q
l
-
$
(
d
a
t
e
 
+
%
s
)


 
 
 
s
p
e
c
:


 
 
 
 
 
r
e
s
o
u
r
c
e
s
:


 
 
 
 
 
 
 
-
 
k
i
n
d
:
 
P
e
r
s
i
s
t
e
n
t
V
o
l
u
m
e
C
l
a
i
m


 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
d
a
t
a
-
p
o
s
t
g
r
e
s
q
l
-
0


 
 
 
 
 
s
n
a
p
s
h
o
t
:


 
 
 
 
 
 
 
b
a
c
k
e
n
d
:
 
s
3


 
 
 
 
 
 
 
r
e
p
o
:
 
h
t
t
p
s
:
/
/
s
3
.
h
r
z
.
u
n
i
-
m
a
r
b
u
r
g
.
d
e
/
b
a
c
k
u
p
s


 
 
 
E
O
F


 
 
 
`
`
`




3
.
 
*
*
V
e
r
i
f
y
 
r
e
s
t
o
r
e
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
g
e
t
 
r
e
s
t
o
r
e
 
|
 
g
r
e
p
 
r
e
s
t
o
r
e
-
p
o
s
t
g
r
e
s
q
l


 
 
 
`
`
`


 
 
 
E
x
p
e
c
t
e
d
:
 
`
C
o
m
p
l
e
t
e
d
`
 
(
s
t
a
t
u
s
 
f
i
e
l
d
)




4
.
 
*
*
R
e
s
t
a
r
t
 
P
o
s
t
g
r
e
S
Q
L
 
p
o
d
s
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
d
e
l
e
t
e
 
p
o
d
 
-
l
 
c
o
m
p
o
n
e
n
t
=
p
o
s
t
g
r
e
s
q
l


 
 
 
`
`
`




5
.
 
*
*
V
e
r
i
f
y
 
d
a
t
a
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
e
x
e
c
 
-
t
i
 
p
o
d
s
 
-
l
 
c
o
m
p
o
n
e
n
t
=
p
o
s
t
g
r
e
s
q
l
 
-
-
 
\


 
 
 
 
 
s
h
 
-
c
 
"
P
G
P
A
S
S
W
O
R
D
=
<
o
p
a
q
u
e
-
p
g
-
p
a
s
s
>
 
p
s
q
l
 
-
U
 
p
o
s
t
g
r
e
s
 
-
c
 
'
\
l
'
"


 
 
 
`
`
`


 
 
 
E
x
p
e
c
t
e
d
:
 
A
l
l
 
d
a
t
a
b
a
s
e
s
 
p
r
e
s
e
n
t
 
(
`
n
e
x
t
c
l
o
u
d
`
,
 
`
e
l
e
m
e
n
t
`
,
 
e
t
c
.
)




*
*
P
r
e
v
e
n
t
i
o
n
:
*
*
 
U
s
e
 
d
e
d
i
c
a
t
e
d
 
P
o
s
t
g
r
e
S
Q
L
 
S
c
h
e
d
u
l
e
 
(
`
d
e
f
-
p
o
s
t
g
r
e
s
q
l
-
b
a
c
k
u
p
`
)
 
f
o
r
 
d
a
i
l
y
 
d
u
m
p
s
,
 
s
y
n
c
e
d
 
t
o
 
S
3
.




#
#
 
R
u
n
b
o
o
k
:
 
R
e
d
i
s
 
C
a
c
h
e
 
F
l
u
s
h




#
#
#
 
S
c
e
n
a
r
i
o
:
 
D
i
s
t
r
i
b
u
t
e
d
 
c
a
c
h
e
 
r
e
q
u
i
r
e
s
 
f
l
u
s
h
 
(
c
o
r
r
u
p
t
e
d
 
k
e
y
s
,
 
s
t
a
l
e
 
d
a
t
a
)




*
*
S
y
m
p
t
o
m
s
:
*
*


-
 
A
p
p
l
i
c
a
t
i
o
n
s
 
r
e
t
u
r
n
 
s
t
a
l
e
 
c
o
n
f
i
g
u
r
a
t
i
o
n
 
o
r
 
c
a
c
h
e
d
 
d
a
t
a


-
 
K
e
y
c
l
o
a
k
 
u
s
e
r
s
 
c
a
n
n
o
t
 
l
o
g
 
i
n
 
(
s
t
a
l
e
 
s
e
s
s
i
o
n
 
t
o
k
e
n
s
 
i
n
 
R
e
d
i
s
)




*
*
R
o
o
t
 
C
a
u
s
e
:
*
*
 
R
e
d
i
s
 
c
a
c
h
e
 
c
o
n
t
a
i
n
s
 
c
o
r
r
u
p
t
e
d
 
o
r
 
s
t
a
l
e
 
e
n
t
r
i
e
s
.




*
*
S
t
e
p
s
 
t
o
 
R
e
s
o
l
v
e
:
*
*




1
.
 
*
*
I
d
e
n
t
i
f
y
 
a
f
f
e
c
t
e
d
 
s
e
r
v
i
c
e
s
:
*
*


 
 
 
-
 
K
e
y
c
l
o
a
k
 
u
s
e
s
 
`
r
e
d
i
s
-
h
e
a
d
l
e
s
s
`
 
(
K
E
Y
C
L
O
A
K
 
c
a
c
h
e
,
 
s
e
s
s
i
o
n
s
)


 
 
 
-
 
I
n
t
e
r
c
o
m
 
S
e
r
v
i
c
e
 
u
s
e
s
 
`
r
e
d
i
s
-
h
e
a
d
l
e
s
s
`
 
(
t
o
k
e
n
 
c
a
c
h
e
)


 
 
 
-
 
N
e
x
t
c
l
o
u
d
 
u
s
e
s
 
`
r
e
d
i
s
-
h
e
a
d
l
e
s
s
`
 
(
f
i
l
e
 
l
o
c
k
i
n
g
)


 
 
 
-
 
E
l
e
m
e
n
t
 
u
s
e
s
 
`
r
e
d
i
s
-
h
e
a
d
l
e
s
s
`
 
(
m
e
s
s
a
g
e
 
c
a
c
h
e
)


 
 
 
-
 
B
i
g
B
l
u
e
B
u
t
t
o
n
 
u
s
e
s
 
o
w
n
 
`
r
e
d
i
s
`
 
(
c
h
a
t
/
s
e
s
s
i
o
n
s
)


 
 
 
-
 
Z
a
m
m
a
d
 
u
s
e
s
 
`
e
l
a
s
t
i
c
s
e
a
r
c
h
`
 
+
 
o
w
n
 
`
r
e
d
i
s
`
 
(
s
e
s
s
i
o
n
)




2
.
 
*
*
F
l
u
s
h
 
R
e
d
i
s
 
k
e
y
s
 
(
W
I
T
H
 
C
A
U
T
I
O
N
 
-
 
a
f
f
e
c
t
s
 
a
l
l
 
u
s
e
r
s
)
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
e
x
e
c
 
-
t
i
 
s
v
c
/
r
e
d
i
s
-
h
e
a
d
l
e
s
s
 
-
-
 
\


 
 
 
 
 
s
h
 
-
c
 
"
r
e
d
i
s
-
c
l
i
 
F
L
U
S
H
A
L
L
"
 
 
#
 
D
A
N
G
E
R
:
 
c
l
e
a
r
s
 
a
l
l
 
k
e
y
s


 
 
 
`
`
`




3
.
 
*
*
A
l
t
e
r
n
a
t
i
v
e
l
y
,
 
f
l
u
s
h
 
o
n
l
y
 
s
p
e
c
i
f
i
c
 
k
e
y
s
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
e
x
e
c
 
-
t
i
 
s
v
c
/
r
e
d
i
s
-
h
e
a
d
l
e
s
s
 
-
-
 
\


 
 
 
 
 
s
h
 
-
c
 
"
r
e
d
i
s
-
c
l
i
 
S
C
A
N
 
0
 
M
A
T
C
H
 
k
e
y
c
l
o
a
k
:
*
 
C
O
U
N
T
 
1
0
0
0
0
"


 
 
 
#
 
T
h
e
n
:
 
r
e
d
i
s
-
c
l
i
 
D
E
L
 
k
e
y
c
l
o
a
k
:
<
p
a
t
t
e
r
n
>
 
f
o
r
 
e
a
c
h
 
k
e
y


 
 
 
`
`
`




4
.
 
*
*
T
r
i
g
g
e
r
 
a
p
p
l
i
c
a
t
i
o
n
 
r
e
s
t
a
r
t
s
:
*
*


 
 
 
-
 
K
e
y
c
l
o
a
k
:
 
`
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
d
e
l
e
t
e
 
p
o
d
 
-
l
 
c
o
m
p
o
n
e
n
t
=
k
e
y
c
l
o
a
k
`


 
 
 
-
 
N
e
x
t
c
l
o
u
d
:
 
`
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
d
e
l
e
t
e
 
p
o
d
 
-
l
 
c
o
m
p
o
n
e
n
t
=
n
e
x
t
c
l
o
u
d
`


 
 
 
-
 
E
l
e
m
e
n
t
:
 
`
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
d
e
l
e
t
e
 
p
o
d
 
-
l
 
c
o
m
p
o
n
e
n
t
=
e
l
e
m
e
n
t
`




5
.
 
*
*
V
e
r
i
f
y
 
c
a
c
h
e
 
r
e
b
u
i
l
d
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
g
e
t
 
p
o
d
s
 
-
l
 
c
o
m
p
o
n
e
n
t
=
k
e
y
c
l
o
a
k
 
-
o
 
n
a
m
e


 
 
 
`
`
`


 
 
 
E
x
p
e
c
t
e
d
:
 
A
l
l
 
p
o
d
s
 
`
R
u
n
n
i
n
g
`




*
*
C
a
u
t
i
o
n
:
*
*
 
`
F
L
U
S
H
A
L
L
`
 
l
o
g
s
 
o
u
t
 
A
L
L
 
u
s
e
r
s
.
 
U
s
e
 
o
n
l
y
 
i
f
 
c
a
c
h
e
 
c
o
r
r
u
p
t
i
o
n
 
i
s
 
c
o
n
f
i
r
m
e
d
 
a
n
d
 
u
s
e
r
s
 
c
a
n
 
r
e
-
l
o
g
i
n
.




#
#
 
R
u
n
b
o
o
k
:
 
C
h
e
c
k
 
k
8
u
p
 
B
a
c
k
u
p
 
S
c
h
e
d
u
l
e
 
S
t
a
t
u
s




#
#
#
 
S
c
e
n
a
r
i
o
:
 
B
a
c
k
u
p
 
s
c
h
e
d
u
l
e
 
m
i
s
s
e
d
 
o
r
 
j
o
b
s
 
s
t
u
c
k




*
*
S
y
m
p
t
o
m
s
:
*
*


-
 
`
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
g
e
t
 
s
c
h
e
d
u
l
e
`
 
s
h
o
w
s
 
`
0
/
0
`
 
b
a
c
k
u
p
s
 
(
n
o
 
j
o
b
 
c
r
e
a
t
e
d
)


-
 
B
a
c
k
u
p
 
j
o
b
s
 
s
t
u
c
k
 
i
n
 
`
C
o
n
t
a
i
n
e
r
C
r
e
a
t
i
n
g
`
 
(
`
k
u
b
e
c
t
l
 
g
e
t
 
j
o
b
s
 
-
n
 
o
p
e
n
d
e
s
k
`
)




*
*
R
o
o
t
 
C
a
u
s
e
:
*
*


-
 
S
c
h
e
d
u
l
e
 
m
i
s
c
o
n
f
i
g
u
r
e
d


-
 
R
W
O
 
P
V
C
 
e
x
c
l
u
s
i
o
n
 
n
o
t
 
a
p
p
l
i
e
d
 
(
b
a
c
k
u
p
 
j
o
b
 
t
r
y
i
n
g
 
t
o
 
m
o
u
n
t
 
m
u
l
t
i
p
l
e
 
R
W
O
 
P
V
C
s
)


-
 
B
a
c
k
u
p
 
t
a
r
g
e
t
 
(
S
3
)
 
u
n
r
e
a
c
h
a
b
l
e




*
*
S
t
e
p
s
 
t
o
 
R
e
s
o
l
v
e
:
*
*




1
.
 
*
*
C
h
e
c
k
 
s
c
h
e
d
u
l
e
 
s
t
a
t
u
s
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
g
e
t
 
s
c
h
e
d
u
l
e
 
b
a
c
k
u
p
-
l
i
v
e


 
 
 
`
`
`


 
 
 
E
x
p
e
c
t
e
d
:
 
`
R
E
A
D
Y
:
 
T
r
u
e
`
,
 
`
L
A
S
T
 
B
A
C
K
U
P
:
 
<
t
i
m
e
s
t
a
m
p
>
`
.




2
.
 
*
*
C
h
e
c
k
 
s
c
h
e
d
u
l
e
 
a
n
n
o
t
a
t
i
o
n
s
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
d
e
s
c
r
i
b
e
 
s
c
h
e
d
u
l
e
 
b
a
c
k
u
p
-
l
i
v
e
 
|
 
g
r
e
p
 
k
8
u
p
.
i
o


 
 
 
`
`
`


 
 
 
E
x
p
e
c
t
e
d
:
 
`
k
8
u
p
.
i
o
/
e
x
c
l
u
d
e
:
 
"
t
r
u
e
"
`
 
o
n
 
a
l
l
 
2
9
 
R
W
O
 
P
V
C
s
.




3
.
 
*
*
C
h
e
c
k
 
r
e
c
e
n
t
 
j
o
b
s
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
g
e
t
 
j
o
b
s
 
-
l
 
k
8
u
p
.
i
o
/
s
c
h
e
d
u
l
e
=
b
a
c
k
u
p
-
l
i
v
e
 
-
o
 
n
a
m
e
 
-
-
s
o
r
t
-
b
y
=
.
m
e
t
a
d
a
t
a
.
c
r
e
a
t
i
o
n
T
i
m
e
s
t
a
m
p
 
|
 
t
a
i
l
 
-
5


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
d
e
s
c
r
i
b
e
 
j
o
b
 
<
j
o
b
-
n
a
m
e
>


 
 
 
`
`
`


 
 
 
E
x
p
e
c
t
e
d
:
 
`
1
/
1
 
C
O
M
P
L
E
T
E
D
`
 
(
s
t
a
t
u
s
)
.
 
I
f
 
s
t
u
c
k
,
 
`
1
/
1
 
R
U
N
N
I
N
G
`
 
>
1
h
 
=
 
u
n
h
e
a
l
t
h
y
.




4
.
 
*
*
D
e
l
e
t
e
 
s
t
u
c
k
 
j
o
b
s
 
(
l
a
s
t
 
r
e
s
o
r
t
)
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
d
e
l
e
t
e
 
j
o
b
s
 
-
l
 
k
8
u
p
.
i
o
/
s
c
h
e
d
u
l
e
=
b
a
c
k
u
p
-
l
i
v
e


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
d
e
l
e
t
e
 
p
o
d
s
 
-
l
 
j
o
b
-
n
a
m
e
=
<
j
o
b
-
n
a
m
e
>
 
 
#
 
F
o
r
c
e
 
p
o
d
 
c
l
e
a
n
u
p


 
 
 
`
`
`




5
.
 
*
*
C
h
e
c
k
 
S
3
 
c
o
n
n
e
c
t
i
v
i
t
y
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
l
o
g
s
 
-
l
 
k
8
u
p
.
i
o
/
c
o
m
p
o
n
e
n
t
=
s
c
h
e
d
u
l
e
 
-
l
 
k
8
u
p
.
i
o
/
s
c
h
e
d
u
l
e
=
b
a
c
k
u
p
-
l
i
v
e
 
-
-
t
a
i
l
=
5
0
 
|
 
g
r
e
p
 
s
3


 
 
 
`
`
`


 
 
 
E
x
p
e
c
t
e
d
:
 
N
o
 
e
r
r
o
r
s
.
 
I
f
 
`
A
c
c
e
s
s
D
e
n
i
e
d
`
,
 
v
e
r
i
f
y
 
S
3
 
c
r
e
d
e
n
t
i
a
l
s
 
i
n
 
`
o
p
e
n
d
e
s
k
-
s
3
-
s
e
c
r
e
t
`
.




#
#
 
R
u
n
b
o
o
k
:
 
S
e
r
v
i
c
e
 
E
n
d
p
o
i
n
t
 
U
n
r
e
a
c
h
a
b
l
e
 
(
D
N
S
/
T
C
P
)




#
#
#
 
S
c
e
n
a
r
i
o
:
 
S
e
r
v
i
c
e
 
e
n
d
p
o
i
n
t
 
r
e
t
u
r
n
s
 
`
C
o
n
n
e
c
t
i
o
n
 
r
e
f
u
s
e
d
`
 
o
r
 
D
N
S
 
t
i
m
e
o
u
t




*
*
S
y
m
p
t
o
m
s
:
*
*


-
 
S
e
r
v
i
c
e
 
A
 
c
a
n
n
o
t
 
r
e
a
c
h
 
S
e
r
v
i
c
e
 
B
 
(
e
.
g
.
,
 
N
e
x
t
c
l
o
u
d
 
→
 
D
o
v
e
c
o
t
 
I
M
A
P
,
 
S
O
G
o
 
→
 
L
D
A
P
)


-
 
`
k
u
b
e
c
t
l
 
e
x
e
c
 
-
t
i
 
<
p
o
d
-
a
>
 
-
-
 
c
u
r
l
 
-
s
 
h
t
t
p
:
/
/
<
s
e
r
v
i
c
e
-
b
>
.
<
n
a
m
e
s
p
a
c
e
>
.
s
v
c
:
p
o
r
t
`
 
f
a
i
l
s




*
*
R
o
o
t
 
C
a
u
s
e
:
*
*


-
 
S
e
r
v
i
c
e
 
B
 
n
o
t
 
r
u
n
n
i
n
g


-
 
P
o
d
 
a
n
t
i
-
a
f
f
i
n
i
t
y
 
b
l
o
c
k
i
n
g
 
p
o
d
 
p
l
a
c
e
m
e
n
t


-
 
N
e
t
w
o
r
k
 
p
o
l
i
c
y
 
b
l
o
c
k
i
n
g
 
t
r
a
f
f
i
c
 
(
O
t
t
e
r
i
z
e
)


-
 
D
N
S
 
C
N
A
M
E
 
c
h
a
i
n
 
i
s
s
u
e
 
(
H
R
Z
-
s
p
e
c
i
f
i
c
)




*
*
S
t
e
p
s
 
t
o
 
R
e
s
o
l
v
e
:
*
*




1
.
 
*
*
C
h
e
c
k
 
S
e
r
v
i
c
e
 
B
 
e
n
d
p
o
i
n
t
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
g
e
t
 
s
v
c
 
<
s
e
r
v
i
c
e
-
b
>


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
g
e
t
 
p
o
d
s
 
-
l
 
c
o
m
p
o
n
e
n
t
=
<
s
e
r
v
i
c
e
-
b
>


 
 
 
`
`
`




2
.
 
*
*
I
f
 
S
e
r
v
i
c
e
 
B
 
n
o
t
 
r
u
n
n
i
n
g
:
*
*
 
R
e
s
t
a
r
t
 
p
o
d
s
 
(
o
r
 
c
h
e
c
k
 
S
t
a
t
e
f
u
l
S
e
t
 
r
e
p
l
i
c
a
 
c
o
u
n
t
)




3
.
 
*
*
I
f
 
D
N
S
 
C
N
A
M
E
 
c
h
a
i
n
 
i
s
s
u
e
 
(
H
R
Z
-
s
p
e
c
i
f
i
c
)
:
*
*


 
 
 
-
 
C
h
e
c
k
 
i
f
 
s
e
r
v
i
c
e
 
u
s
e
s
 
a
n
 
e
x
t
e
r
n
a
l
 
D
N
S
 
r
e
s
o
l
u
t
i
o
n
 
(
e
.
g
.
,
 
t
h
i
r
d
-
p
a
r
t
y
 
A
P
I
)


 
 
 
-
 
A
d
d
 
`
h
o
s
t
A
l
i
a
s
e
s
`
 
t
o
 
d
e
p
l
o
y
m
e
n
t
 
p
o
i
n
t
i
n
g
 
t
o
 
i
n
g
r
e
s
s
 
I
P
 
(
1
9
2
.
1
6
8
.
3
.
2
0
1
)


 
 
 
-
 
E
x
a
m
p
l
e
:


 
 
 
`
`
`
y
a
m
l


 
 
 
s
p
e
c
:


 
 
 
 
 
h
o
s
t
A
l
i
a
s
e
s
:


 
 
 
 
 
-
 
i
p
:
 
"
1
9
2
.
1
6
8
.
3
.
2
0
1
"


 
 
 
 
 
 
 
h
o
s
t
n
a
m
e
s
:


 
 
 
 
 
 
 
-
 
"
e
x
t
e
r
n
a
l
-
a
p
i
.
e
x
a
m
p
l
e
.
c
o
m
"


 
 
 
`
`
`




4
.
 
*
*
I
f
 
N
e
t
w
o
r
k
 
P
o
l
i
c
y
 
b
l
o
c
k
i
n
g
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
g
e
t
 
n
e
t
w
o
r
k
p
o
l
i
c
i
e
s
 
-
l
 
o
t
t
e
r
i
z
e
/
i
n
t
e
n
t
=
e
n
a
b
l
e
d


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
d
e
s
c
r
i
b
e
 
n
e
t
w
o
r
k
p
o
l
i
c
y
 
<
p
o
l
i
c
y
-
n
a
m
e
>


 
 
 
`
`
`


 
 
 
-
 
V
e
r
i
f
y
 
`
C
l
i
e
n
t
I
n
t
e
n
t
`
 
/
 
`
S
e
r
v
e
r
I
n
t
e
n
t
`
 
d
e
f
i
n
e
 
t
r
a
f
f
i
c
 
s
o
u
r
c
e
 
→
 
d
e
s
t
i
n
a
t
i
o
n
 
c
o
r
r
e
c
t
l
y
.




5
.
 
*
*
T
e
s
t
 
T
C
P
 
c
o
n
n
e
c
t
i
v
i
t
y
 
f
r
o
m
 
P
o
d
 
A
 
t
o
 
S
e
r
v
i
c
e
 
B
:
*
*


 
 
 
`
`
`
b
a
s
h


 
 
 
k
u
b
e
c
t
l
 
-
n
 
o
p
e
n
d
e
s
k
 
e
x
e
c
 
-
t
i
 
<
p
o
d
-
a
>
 
-
-
 
t
i
m
e
o
u
t
 
5
 
b
a
s
h
 
-
c
 
\


 
 
 
 
 
'
c
a
t
 
<
 
/
d
e
v
/
n
u
l
l
 
>
 
/
d
e
v
/
t
c
p
/
<
s
e
r
v
i
c
e
-
b
>
.
o
p
e
n
d
e
s
k
.
s
v
c
/
<
p
o
r
t
>
'
 
&
&
 
e
c
h
o
 
"
O
K
"
 
|
|
 
e
c
h
o
 
"
F
A
I
L
"


 
 
 
`
`
`




#
#
 
D
e
p
e
n
d
s
 
O
n




k
u
b
e
c
t
l
,
 
h
e
l
m
f
i
l
e
,
 
k
8
u
p
 
o
p
e
r
a
t
o
r
,
 
S
3
 
(
b
a
c
k
u
p
s
)
,
 
P
r
o
m
e
t
h
e
u
s
/
G
r
a
f
a
n
a
 
(
a
l
e
r
t
i
n
g
)




#
#
 
I
n
t
e
g
r
a
t
e
s
 
W
i
t
h




[
D
i
s
a
s
t
e
r
 
R
e
c
o
v
e
r
y
]
(
.
/
d
i
s
a
s
t
e
r
-
r
e
c
o
v
e
r
y
/
)
,
 
[
M
o
n
i
t
o
r
i
n
g
]
(
.
/
m
o
n
i
t
o
r
i
n
g
/
)
,
 
[
S
e
c
u
r
i
t
y
/
C
o
m
p
l
i
a
n
c
e
 
C
h
e
c
k
l
i
s
t
s
]
(
.
/
s
e
c
u
r
i
t
y
/
c
o
m
p
l
i
a
n
c
e
-
c
h
e
c
k
l
i
s
t
s
/
)

