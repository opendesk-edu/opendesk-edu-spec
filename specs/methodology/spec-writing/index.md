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
 
S
p
e
c
 
W
r
i
t
i
n
g
 
M
e
t
h
o
d
o
l
o
g
y




#
#
 
P
u
r
p
o
s
e




T
h
i
s
 
s
p
e
c
 
d
e
f
i
n
e
s
 
t
h
e
 
m
e
t
h
o
d
o
l
o
g
y
 
f
o
r
 
w
r
i
t
i
n
g
 
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
 
O
p
e
n
S
p
e
c
s
,
 
e
n
s
u
r
i
n
g


c
o
n
s
i
s
t
e
n
c
y
,
 
c
o
m
p
l
e
t
e
n
e
s
s
,
 
a
n
d
 
t
e
s
t
a
b
i
l
i
t
y
 
a
c
r
o
s
s
 
a
l
l
 
s
p
e
c
i
f
i
c
a
t
i
o
n
s
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
 
F
o
r
m
a
l
 
r
e
q
u
i
r
e
m
e
n
t
s
 
e
n
g
i
n
e
e
r
i
n
g
 
p
r
o
c
e
s
s
e
s
 
(
t
o
o
 
h
e
a
v
y
w
e
i
g
h
t
 
f
o
r
 
a
g
i
l
e
)


-
 
S
p
e
c
 
a
u
t
h
o
r
i
n
g
 
t
o
o
l
c
h
a
i
n
 
(
c
h
o
o
s
e
 
a
n
y
 
e
d
i
t
o
r
,
 
n
o
 
t
o
o
l
 
m
a
n
d
a
t
e
)


-
 
S
p
e
c
 
a
p
p
r
o
v
a
l
 
p
r
o
c
e
s
s
 
(
d
e
l
e
g
a
t
e
d
 
t
o
 
m
a
i
n
t
a
i
n
e
r
s
,
 
n
o
t
 
i
n
 
s
c
o
p
e
)




#
#
 
R
e
q
u
i
r
e
m
e
n
t
s




#
#
#
 
R
e
q
u
i
r
e
m
e
n
t
:
 
R
F
C
 
2
1
1
9
 
K
e
y
w
o
r
d
s




A
l
l
 
r
e
q
u
i
r
e
m
e
n
t
s
 
S
H
A
L
L
 
u
s
e
 
R
F
C
 
2
1
1
9
 
k
e
y
w
o
r
d
s
 
(
S
H
A
L
L
,
 
M
U
S
T
,
 
S
H
O
U
L
D
,
 
M
A
Y
)
 
t
o


i
n
d
i
c
a
t
e
 
r
e
q
u
i
r
e
m
e
n
t
 
l
e
v
e
l
s
.




#
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
 
R
e
q
u
i
r
e
m
e
n
t
 
l
e
v
e
l
i
n
g


-
 
G
I
V
E
N
 
a
 
d
e
s
c
r
i
p
t
i
o
n
 
o
f
 
a
 
f
e
a
t
u
r
e
 
o
r
 
b
e
h
a
v
i
o
r


-
 
W
H
E
N
 
c
o
n
v
e
r
t
i
n
g
 
t
o
 
a
 
f
o
r
m
a
l
 
r
e
q
u
i
r
e
m
e
n
t


-
 
T
H
E
N
 
m
a
n
d
a
t
o
r
y
 
b
e
h
a
v
i
o
r
s
 
u
s
e
 
`
S
H
A
L
L
`
 
o
r
 
`
M
U
S
T
`


-
 
A
N
D
 
r
e
c
o
m
m
e
n
d
e
d
 
b
e
h
a
v
i
o
r
s
 
u
s
e
 
`
S
H
O
U
L
D
`


-
 
A
N
D
 
o
p
t
i
o
n
a
l
 
b
e
h
a
v
i
o
r
s
 
u
s
e
 
`
M
A
Y
`


-
 
A
N
D
禁
止
性
的
要
求
 
u
s
e
 
`
S
H
A
L
L
 
N
O
T
`
 
o
r
 
`
M
U
S
T
 
N
O
T
`




#
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
 
R
e
q
u
i
r
e
m
e
n
t
 
c
o
n
s
i
s
t
e
n
c
y


-
 
G
I
V
E
N
 
m
u
l
t
i
p
l
e
 
r
e
l
a
t
e
d
 
r
e
q
u
i
r
e
m
e
n
t
s


-
 
W
H
E
N
 
r
e
v
i
e
w
i
n
g
 
f
o
r
 
c
o
n
s
i
s
t
e
n
c
y


-
 
T
H
E
N
 
a
l
l
 
r
e
q
u
i
r
e
m
e
n
t
s
 
u
s
e
 
R
F
C
 
2
1
1
9
 
k
e
y
w
o
r
d
s


-
 
A
N
D
 
`
S
H
A
L
L
`
 
i
s
 
u
s
e
d
 
f
o
r
 
*
r
e
q
u
i
r
e
*
 
n
o
t
 
*
m
a
y
 
b
e
*


-
 
A
N
D
 
`
M
A
Y
`
 
i
s
 
u
s
e
d
 
f
o
r
 
*
o
p
t
i
o
n
a
l
*
 
n
o
t
 
*
s
h
o
u
l
d
 
s
o
m
e
t
i
m
e
s
*




#
#
#
 
R
e
q
u
i
r
e
m
e
n
t
:
 
G
i
v
e
n
-
W
h
e
n
-
T
h
e
n
 
T
e
s
t
a
b
i
l
i
t
y




A
l
l
 
r
e
q
u
i
r
e
m
e
n
t
s
 
S
H
A
L
L
 
h
a
v
e
 
a
t
 
l
e
a
s
t
 
o
n
e
 
t
e
s
t
a
b
l
e
 
s
c
e
n
a
r
i
o
 
u
s
i
n
g
 
G
i
v
e
n
-
W
h
e
n
-
T
h
e
n


(
G
h
e
r
k
i
n
)
 
f
o
r
m
a
t
.




#
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
 
M
i
n
i
m
u
m
 
t
e
s
t
a
b
l
e
 
s
c
e
n
a
r
i
o


-
 
G
I
V
E
N
 
a
 
r
e
q
u
i
r
e
m
e
n
t
 
(
e
.
g
.
,
 
"
U
s
e
r
s
 
S
H
A
L
L
 
a
u
t
h
e
n
t
i
c
a
t
e
 
v
i
a
 
O
I
D
C
"
)


-
 
W
H
E
N
 
w
r
i
t
i
n
g
 
t
h
e
 
r
e
q
u
i
r
e
m
e
n
t


-
 
T
H
E
N
 
a
t
 
l
e
a
s
t
 
o
n
e
 
s
c
e
n
a
r
i
o
 
i
s
 
p
r
o
v
i
d
e
d
 
(
e
.
g
.
,
 
"
U
s
e
r
 
a
u
t
h
e
n
t
i
c
a
t
e
s
 
v
i
a
 
O
I
D
C
"
)


-
 
A
N
D
 
t
h
e
 
s
c
e
n
a
r
i
o
 
s
t
a
r
t
s
 
w
i
t
h
 
"
G
I
V
E
N
"


-
 
A
N
D
 
f
o
l
l
o
w
e
d
 
b
y
 
"
W
H
E
N
"


-
 
A
N
D
 
f
o
l
l
o
w
e
d
 
b
y
 
"
T
H
E
N
"


-
 
A
N
D
 
o
p
t
i
o
n
a
l
l
y
 
f
o
l
l
o
w
e
d
 
b
y
 
"
A
N
D
"
 
f
o
r
 
a
d
d
i
t
i
o
n
a
l
 
a
s
s
e
r
t
i
o
n
s




#
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
c
e
n
a
r
i
o
 
c
o
m
p
l
e
t
e
n
e
s
s


-
 
G
I
V
E
N
 
a
 
r
e
q
u
i
r
e
m
e
n
t
 
w
i
t
h
 
c
o
m
p
l
e
x
 
b
e
h
a
v
i
o
r


-
 
W
H
E
N
 
w
r
i
t
i
n
g
 
s
c
e
n
a
r
i
o
s


-
 
T
H
E
N
 
h
a
p
p
y
 
p
a
t
h
 
s
c
e
n
a
r
i
o
s
 
a
r
e
 
c
o
v
e
r
e
d
 
(
n
o
r
m
a
l
 
o
p
e
r
a
t
i
o
n
)


-
 
A
N
D
 
e
r
r
o
r
 
s
c
e
n
a
r
i
o
s
 
a
r
e
 
c
o
v
e
r
e
d
 
(
u
n
e
x
p
e
c
t
e
d
 
i
n
p
u
t
s
,
 
f
a
i
l
u
r
e
s
)


-
 
A
N
D
 
e
d
g
e
 
c
a
s
e
s
 
a
r
e
 
c
o
v
e
r
e
d
 
(
b
o
u
n
d
a
r
y
 
v
a
l
u
e
s
,
 
n
u
l
l
 
i
n
p
u
t
s
)


-
 
A
N
D
 
e
a
c
h
 
s
c
e
n
a
r
i
o
 
i
s
 
i
n
d
e
p
e
n
d
e
n
t
l
y
 
t
e
s
t
a
b
l
e




#
#
#
 
R
e
q
u
i
r
e
m
e
n
t
:
 
M
o
d
u
l
a
r
 
S
c
o
p
e
d
 
S
p
e
c
s




E
a
c
h
 
s
p
e
c
 
S
H
A
L
L
 
c
o
v
e
r
 
a
 
s
i
n
g
l
e
 
b
o
u
n
d
e
d
 
d
o
m
a
i
n
 
o
r
 
s
e
r
v
i
c
e
 
b
e
h
a
v
i
o
r
.




#
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
i
n
g
l
e
 
r
e
s
p
o
n
s
i
b
i
l
i
t
y


-
 
G
I
V
E
N
 
a
 
s
p
e
c
 
f
i
l
e
 
t
o
 
c
r
e
a
t
e


-
 
W
H
E
N
 
s
e
l
e
c
t
i
n
g
 
t
h
e
 
s
p
e
c
 
s
c
o
p
e


-
 
T
H
E
N
 
t
h
e
 
s
p
e
c
 
c
o
v
e
r
s
 
o
n
e
 
d
o
m
a
i
n
 
(
a
u
t
h
,
 
s
e
r
v
i
c
e
s
,
 
p
l
a
t
f
o
r
m
,
 
i
n
t
e
g
r
a
t
i
o
n
s
)


-
 
A
N
D
 
t
h
e
 
s
p
e
c
 
d
o
e
s
 
n
o
t
 
m
i
x
 
m
u
l
t
i
p
l
e
 
u
n
r
e
l
a
t
e
d
 
d
o
m
a
i
n
s


-
 
A
N
D
 
t
h
e
 
s
p
e
c
 
c
a
n
 
b
e
 
u
n
d
e
r
s
t
o
o
d
 
i
n
d
e
p
e
n
d
e
n
t
l
y




#
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
o
m
a
i
n
 
d
e
c
o
m
p
o
s
i
t
i
o
n


-
 
G
I
V
E
N
 
a
 
c
o
m
p
l
e
x
 
s
e
r
v
i
c
e
 
(
e
.
g
.
,
 
K
e
y
c
l
o
a
k
 
w
i
t
h
 
I
A
M
,
 
O
I
D
C
,
 
S
A
M
L
 
f
e
a
t
u
r
e
s
)


-
 
W
H
E
N
 
s
p
l
i
t
t
i
n
g
 
a
c
r
o
s
s
 
m
u
l
t
i
p
l
e
 
s
p
e
c
s


-
 
T
H
E
N
 
K
e
y
c
l
o
a
k
 
I
A
M
 
s
p
e
c
 
c
o
v
e
r
s
 
i
d
e
n
t
i
t
y
 
m
a
n
a
g
e
m
e
n
t


-
 
A
N
D
 
K
e
y
c
l
o
a
k
 
O
I
D
C
 
s
p
e
c
 
c
o
v
e
r
s
 
O
I
D
C
 
e
n
d
p
o
i
n
t
 
b
e
h
a
v
i
o
r


-
 
A
N
D
 
K
e
y
c
l
o
a
k
 
S
A
M
L
 
s
p
e
c
 
c
o
v
e
r
s
 
S
A
M
L
 
S
P
-
S
S
O
 
b
e
h
a
v
i
o
r


-
 
A
N
D
 
e
a
c
h
 
s
p
e
c
 
r
e
m
a
i
n
s
 
m
o
d
u
l
a
r
 
a
n
d
 
f
o
c
u
s
e
d




#
#
#
 
R
e
q
u
i
r
e
m
e
n
t
:
 
D
e
p
e
n
d
s
 
O
n
 
/
 
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
 
C
r
o
s
s
-
R
e
f
e
r
e
n
c
e
s




E
a
c
h
 
s
p
e
c
 
S
H
A
L
L
 
e
x
p
l
i
c
i
t
l
y
 
s
t
a
t
e
 
d
e
p
e
n
d
e
n
c
i
e
s
 
a
n
d
 
i
n
t
e
g
r
a
t
i
o
n
 
p
o
i
n
t
s
.




#
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
e
p
e
n
d
s
 
O
n
 
s
p
e
c
i
f
i
c
a
t
i
o
n


-
 
G
I
V
E
N
 
a
 
s
p
e
c
 
t
h
a
t
 
r
e
q
u
i
r
e
s
 
o
t
h
e
r
 
s
e
r
v
i
c
e
s
 
o
r
 
i
n
f
r
a
s
t
r
u
c
t
u
r
e


-
 
W
H
E
N
 
w
r
i
t
i
n
g
 
t
h
e
 
s
p
e
c


-
 
T
H
E
N
 
a
 
"
D
e
p
e
n
d
s
 
O
n
"
 
s
e
c
t
i
o
n
 
i
s
 
i
n
c
l
u
d
e
d


-
 
A
N
D
 
e
a
c
h
 
d
e
p
e
n
d
e
n
c
y
 
i
s
 
l
i
s
t
e
d
 
w
i
t
h
 
s
p
e
c
i
f
i
c
 
h
o
s
t
:
p
o
r
t
 
r
e
f
e
r
e
n
c
e
s


-
 
A
N
D
 
s
e
c
r
e
t
 
r
e
f
e
r
e
n
c
e
s
 
a
r
e
 
s
p
e
c
i
f
i
e
d
 
(
e
.
g
.
,
 
`
s
e
c
r
e
t
.
s
e
r
v
i
c
e
.
p
a
s
s
w
o
r
d
K
e
y
`
)


-
 
A
N
D
 
i
n
f
r
a
s
t
r
u
c
t
u
r
e
 
d
e
p
e
n
d
e
n
c
i
e
s
 
a
r
e
 
l
i
s
t
e
d
 
(
e
.
g
.
,
 
i
n
g
r
e
s
s
 
c
l
a
s
s
,
 
s
t
o
r
a
g
e
 
c
l
a
s
s
)




#
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
 
s
p
e
c
i
f
i
c
a
t
i
o
n


-
 
G
I
V
E
N
 
a
 
s
p
e
c
 
t
h
a
t
 
i
n
t
e
g
r
a
t
e
s
 
w
i
t
h
 
o
t
h
e
r
 
s
e
r
v
i
c
e
s


-
 
W
H
E
N
 
w
r
i
t
i
n
g
 
t
h
e
 
s
p
e
c


-
 
T
H
E
N
 
a
n
 
"
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
"
 
s
e
c
t
i
o
n
 
i
s
 
i
n
c
l
u
d
e
d


-
 
A
N
D
 
A
P
I
 
c
o
n
t
r
a
c
t
s
 
a
r
e
 
r
e
f
e
r
e
n
c
e
d
 
(
w
i
t
h
 
l
i
n
k
s
 
o
r
 
I
D
s
)


-
 
A
N
D
 
s
e
r
v
i
c
e
 
d
e
p
e
n
d
e
n
c
i
e
s
 
a
r
e
 
l
i
s
t
e
d
 
(
w
i
t
h
 
i
n
t
e
g
r
a
t
i
o
n
 
c
o
n
t
e
x
t
)


-
 
A
N
D
 
s
h
a
r
e
d
 
r
e
s
o
u
r
c
e
s
 
a
r
e
 
d
o
c
u
m
e
n
t
e
d
 
(
d
a
t
a
b
a
s
e
s
,
 
s
t
o
r
a
g
e
,
 
c
a
c
h
e
s
)




#
#
#
 
R
e
q
u
i
r
e
m
e
n
t
:
 
C
o
m
p
o
n
e
n
t
 
R
e
f
e
r
e
n
c
e
 
T
a
b
l
e




E
a
c
h
 
s
p
e
c
 
S
H
A
L
L
 
i
n
c
l
u
d
e
 
a
 
C
o
m
p
o
n
e
n
t
 
R
e
f
e
r
e
n
c
e
 
t
a
b
l
e
 
w
i
t
h
 
k
e
y
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n


d
e
t
a
i
l
s
.




#
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
 
R
e
q
u
i
r
e
d
 
C
o
m
p
o
n
e
n
t
 
R
e
f
e
r
e
n
c
e
 
f
i
e
l
d
s


-
 
G
I
V
E
N
 
a
 
s
p
e
c
 
f
o
r
 
a
 
s
e
r
v
i
c
e


-
 
W
H
E
N
 
w
r
i
t
i
n
g
 
t
h
e
 
C
o
m
p
o
n
e
n
t
 
R
e
f
e
r
e
n
c
e


-
 
T
H
E
N
 
t
h
e
 
t
a
b
l
e
 
i
n
c
l
u
d
e
s
:
 
A
u
t
h
,
 
D
a
t
a
b
a
s
e
,
 
C
a
c
h
e
,
 
S
t
o
r
a
g
e
,
 
P
o
r
t
s


-
 
A
N
D
 
t
h
e
 
t
a
b
l
e
 
i
n
c
l
u
d
e
s
 
L
i
c
e
n
s
e
,
 
C
o
n
f
i
g
,
 
C
h
a
r
t
,
 
H
e
a
l
t
h


-
 
A
N
D
 
v
a
l
u
e
s
 
a
r
e
 
c
o
n
c
r
e
t
e
 
(
h
o
s
t
:
p
o
r
t
,
 
s
e
c
r
e
t
 
r
e
f
e
r
e
n
c
e
s
,
 
v
e
r
s
i
o
n
 
n
u
m
b
e
r
s
)




#
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
 
C
o
m
p
o
n
e
n
t
 
R
e
f
e
r
e
n
c
e
 
a
c
c
u
r
a
c
y


-
 
G
I
V
E
N
 
a
 
C
o
m
p
o
n
e
n
t
 
R
e
f
e
r
e
n
c
e
 
t
a
b
l
e


-
 
W
H
E
N
 
t
h
e
 
s
e
r
v
i
c
e
 
i
s
 
d
e
p
l
o
y
e
d


-
 
T
H
E
N
 
t
h
e
 
l
i
s
t
e
d
 
v
a
l
u
e
s
 
m
a
t
c
h
 
t
h
e
 
a
c
t
u
a
l
 
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


-
 
A
N
D
 
s
e
c
r
e
t
 
k
e
y
s
 
m
a
t
c
h
 
t
h
e
 
a
c
t
u
a
l
 
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
 
k
e
y
s


-
 
A
N
D
 
c
h
a
r
t
 
p
a
t
h
s
 
a
r
e
 
v
a
l
i
d
 
a
n
d
 
e
x
i
s
t
 
i
n
 
h
e
l
m
f
i
l
e
/
c
h
a
r
t
s
/




#
#
#
 
R
e
q
u
i
r
e
m
e
n
t
:
 
S
P
D
X
 
L
i
c
e
n
s
e
 
H
e
a
d
e
r
s




A
l
l
 
s
p
e
c
 
f
i
l
e
s
 
S
H
A
L
L
 
i
n
c
l
u
d
e
 
S
P
D
X
 
l
i
c
e
n
s
e
 
h
e
a
d
e
r
s
 
a
t
 
t
h
e
 
t
o
p
 
o
f
 
t
h
e
 
f
i
l
e
.




#
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
 
L
i
c
e
n
s
e
 
h
e
a
d
e
r
 
f
o
r
m
a
t


-
 
G
I
V
E
N
 
a
 
n
e
w
 
s
p
e
c
 
f
i
l
e


-
 
W
H
E
N
 
c
r
e
a
t
i
n
g
 
t
h
e
 
f
i
l
e


-
 
T
H
E
N
 
t
h
e
 
f
i
r
s
t
 
l
i
n
e
s
 
a
r
e
 
H
T
M
L
 
c
o
m
m
e
n
t
s
 
w
i
t
h
 
S
P
D
X
 
t
a
g
s


-
 
A
N
D
 
t
h
e
 
f
o
r
m
a
t
 
i
s
:


 
 
`
`
`


 
 
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


 
 
`
`
`




#
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
 
L
i
c
e
n
s
e
 
h
e
a
d
e
r
 
c
o
n
s
i
s
t
e
n
c
y


-
 
G
I
V
E
N
 
a
l
l
 
s
p
e
c
 
f
i
l
e
s


-
 
W
H
E
N
 
r
e
v
i
e
w
i
n
g
 
l
i
c
e
n
s
e
 
h
e
a
d
e
r
s


-
 
T
H
E
N
 
a
l
l
 
f
i
l
e
s
 
u
s
e
 
t
h
e
 
s
a
m
e
 
l
i
c
e
n
s
e
 
(
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
 
f
o
r
 
s
p
e
c
s
)


-
 
A
N
D
 
t
h
e
 
c
o
p
y
r
i
g
h
t
 
y
e
a
r
 
i
s
 
c
u
r
r
e
n
t
 
(
e
.
g
.
,
 
"
2
0
2
6
"
)


-
 
A
N
D
 
t
h
e
 
c
o
p
y
r
i
g
h
t
 
t
e
x
t
 
i
s
 
"
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
"


-
 
A
N
D
 
n
o
 
c
u
s
t
o
m
 
l
i
c
e
n
s
e
s
 
a
r
e
 
i
n
t
r
o
d
u
c
e
d




#
#
#
 
R
e
q
u
i
r
e
m
e
n
t
:
 
P
u
r
p
o
s
e
 
a
n
d
 
N
o
n
-
G
o
a
l
s
 
S
e
c
t
i
o
n
s




E
a
c
h
 
s
p
e
c
 
S
H
A
L
L
 
i
n
c
l
u
d
e
 
P
u
r
p
o
s
e
 
a
n
d
 
N
o
n
-
G
o
a
l
s
 
s
e
c
t
i
o
n
s
 
a
t
 
t
h
e
 
b
e
g
i
n
n
i
n
g
.




#
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
u
r
p
o
s
e
 
c
l
a
r
i
t
y


-
 
G
I
V
E
N
 
a
 
s
p
e
c
 
t
o
 
w
r
i
t
e


-
 
W
H
E
N
 
w
r
i
t
i
n
g
 
t
h
e
 
P
u
r
p
o
s
e
 
s
e
c
t
i
o
n


-
 
T
H
E
N
 
t
h
e
 
s
e
c
t
i
o
n
 
d
e
s
c
r
i
b
e
s
 
*
w
h
a
t
*
 
t
h
e
 
s
p
e
c
 
c
o
v
e
r
s
 
i
n
 
1
-
2
 
s
e
n
t
e
n
c
e
s


-
 
A
N
D
 
t
h
e
 
s
c
o
p
e
 
i
s
 
c
l
e
a
r
l
y
 
b
o
u
n
d
e
d


-
 
A
N
D
 
t
h
e
 
a
u
d
i
e
n
c
e
 
i
s
 
i
d
e
n
t
i
f
i
e
d
 
(
e
.
g
.
,
 
"
p
l
a
t
f
o
r
m
 
o
p
e
r
a
t
o
r
s
"
,
 
"
d
e
v
e
l
o
p
e
r
s
"
)




#
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
 
N
o
n
-
G
o
a
l
s
 
d
e
l
i
n
e
a
t
i
o
n


-
 
G
I
V
E
N
 
a
 
s
p
e
c
'
s
 
p
u
r
p
o
s
e
 
d
e
f
i
n
e
d


-
 
W
H
E
N
 
w
r
i
t
i
n
g
 
t
h
e
 
N
o
n
-
G
o
a
l
s
 
s
e
c
t
i
o
n


-
 
T
H
E
N
 
t
h
e
 
s
e
c
t
i
o
n
 
e
x
p
l
i
c
i
t
l
y
 
s
t
a
t
e
s
 
w
h
a
t
 
i
s
 
N
O
T
 
c
o
v
e
r
e
d


-
 
A
N
D
 
e
a
c
h
 
n
o
n
-
g
o
a
l
 
i
s
 
a
 
s
i
n
g
l
e
 
l
i
n
e


-
 
A
N
D
 
n
o
n
-
g
o
a
l
s
 
a
r
e
 
r
e
l
e
v
a
n
t
 
d
e
c
o
y
s
 
(
n
o
t
 
o
b
v
i
o
u
s
l
y
 
u
n
r
e
l
a
t
e
d
)




#
#
#
 
R
e
q
u
i
r
e
m
e
n
t
:
 
S
p
e
c
 
F
i
l
e
 
N
a
m
i
n
g
 
C
o
n
v
e
n
t
i
o
n




S
p
e
c
 
f
i
l
e
s
 
S
H
A
L
L
 
f
o
l
l
o
w
 
a
 
c
o
n
s
i
s
t
e
n
t
 
n
a
m
i
n
g
 
c
o
n
v
e
n
t
i
o
n
.




#
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
 
s
p
e
c
 
n
a
m
i
n
g


-
 
G
I
V
E
N
 
a
 
s
p
e
c
 
f
o
r
 
a
 
s
e
r
v
i
c
e
 
(
e
.
g
.
,
 
I
L
I
A
S
)


-
 
W
H
E
N
 
c
r
e
a
t
i
n
g
 
t
h
e
 
s
p
e
c
 
f
i
l
e


-
 
T
H
E
N
 
t
h
e
 
f
i
l
e
n
a
m
e
 
i
s
 
`
o
p
e
n
s
p
e
c
/
s
p
e
c
s
/
s
e
r
v
i
c
e
s
/
<
s
e
r
v
i
c
e
>
/
`


-
 
A
N
D
 
t
h
e
 
d
i
r
e
c
t
o
r
y
 
n
a
m
e
 
m
a
t
c
h
e
s
 
t
h
e
 
s
e
r
v
i
c
e
 
n
a
m
e
 
(
l
o
w
e
r
c
a
s
e
,
 
h
y
p
h
e
n
a
t
e
d
)


-
 
A
N
D
 
t
h
e
 
f
i
l
e
n
a
m
e
 
i
s
 
a
l
w
a
y
s
 
`
`




#
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
l
a
t
f
o
r
m
 
s
p
e
c
 
n
a
m
i
n
g


-
 
G
I
V
E
N
 
a
 
s
p
e
c
 
f
o
r
 
a
 
p
l
a
t
f
o
r
m
 
f
e
a
t
u
r
e
 
(
e
.
g
.
,
 
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
)


-
 
W
H
E
N
 
c
r
e
a
t
i
n
g
 
t
h
e
 
s
p
e
c
 
f
i
l
e


-
 
T
H
E
N
 
t
h
e
 
f
i
l
e
n
a
m
e
 
i
s
 
`
o
p
e
n
s
p
e
c
/
s
p
e
c
s
/
p
l
a
t
f
o
r
m
/
<
c
a
t
e
g
o
r
y
>
/
<
s
p
e
c
>
/
`


-
 
A
N
D
 
t
h
e
 
c
a
t
e
g
o
r
y
 
i
s
 
o
n
e
 
o
f
:
 
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
,
 
n
e
t
w
o
r
k
i
n
g
,
 
s
t
o
r
a
g
e
,
 
s
e
c
u
r
i
t
y
,
 
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


-
 
A
N
D
 
t
h
e
 
s
p
e
c
 
n
a
m
e
 
i
s
 
d
e
s
c
r
i
p
t
i
v
e
 
(
e
.
g
.
,
 
`
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
/
`
,
 
`
g
l
o
s
s
a
r
y
/
`
,
 
`
a
p
i
-
c
o
n
t
r
a
c
t
s
/
`
)




#
#
#
 
R
e
q
u
i
r
e
m
e
n
t
:
 
T
a
x
 
г
е
м
е
р
а
 
с
т
о
и
т
 
J
S
O
N
 
o
u
t
p
u
t
 
F
o
r
m
a
t




A
P
I
 
c
o
n
t
r
a
c
t
s
 
a
n
d
 
s
h
a
r
e
d
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e
s
 
S
H
A
L
L
 
b
e
 
d
o
c
u
m
e
n
t
e
d
 
w
i
t
h
 
J
S
O
N
 
e
x
a
m
p
l
e
s
.




#
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
 
J
S
O
N
 
e
x
a
m
p
l
e
 
c
o
m
p
l
e
t
e
n
e
s
s


-
 
G
I
V
E
N
 
a
n
 
A
P
I
 
c
o
n
t
r
a
c
t
 
o
r
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e


-
 
W
H
E
N
 
d
o
c
u
m
e
n
t
i
n
g
 
i
t


-
 
T
H
E
N
 
a
 
J
S
O
N
 
e
x
a
m
p
l
e
 
i
s
 
p
r
o
v
i
d
e
d


-
 
A
N
D
 
r
e
q
u
i
r
e
d
 
f
i
e
l
d
s
 
a
r
e
 
m
a
r
k
e
d
 
(
e
.
g
.
,
 
c
o
m
m
e
n
t
s
 
o
r
 
d
e
s
c
r
i
p
t
i
o
n
)


-
 
A
N
D
 
o
p
t
i
o
n
a
l
 
f
i
e
l
d
s
 
a
r
e
 
i
d
e
n
t
i
f
i
e
d


-
 
A
N
D
 
d
a
t
a
 
t
y
p
e
s
 
a
r
e
 
e
x
p
l
i
c
i
t
 
(
s
t
r
i
n
g
,
 
n
u
m
b
e
r
,
 
b
o
o
l
e
a
n
,
 
a
r
r
a
y
,
 
o
b
j
e
c
t
)




#
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
 
J
S
O
N
 
e
x
a
m
p
l
e
 
v
a
l
i
d
i
t
y


-
 
G
I
V
E
N
 
a
 
J
S
O
N
 
e
x
a
m
p
l
e


-
 
W
H
E
N
 
v
a
l
i
d
a
t
e
d
 
w
i
t
h
 
a
 
J
S
O
N
 
p
a
r
s
e
r


-
 
T
H
E
N
 
t
h
e
 
e
x
a
m
p
l
e
 
i
s
 
v
a
l
i
d
 
J
S
O
N


-
 
A
N
D
 
n
o
 
s
y
n
t
a
x
 
e
r
r
o
r
s
 
e
x
i
s
t
 
(
m
i
s
s
i
n
g
 
q
u
o
t
e
s
,
 
t
r
a
i
l
i
n
g
 
c
o
m
m
a
s
)


-
 
A
N
D
 
t
h
e
 
e
x
a
m
p
l
e
 
i
s
 
c
o
p
y
-
p
a
s
t
e
a
b
l
e
 
f
o
r
 
t
e
s
t
i
n
g




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




-
 
M
E
T
H
O
D
O
L
O
G
Y
.
m
d
 
(
A
I
-
a
s
s
i
s
t
e
d
 
d
e
v
e
l
o
p
m
e
n
t
 
m
e
t
h
o
d
o
l
o
g
y
)


-
 
e
x
i
s
t
i
n
g
-
s
p
e
c
/
*
 
(
r
e
f
e
r
e
n
c
e
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
s
 
f
o
r
 
p
a
t
t
e
r
n
s
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




*
*
P
l
a
t
f
o
r
m
 
S
p
e
c
s
*
*
:


-
 
S
e
r
v
i
c
e
s
/
*
 
(
a
l
l
 
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
 
f
o
l
l
o
w
 
t
h
i
s
 
m
e
t
h
o
d
o
l
o
g
y
)


-
 
P
l
a
t
f
o
r
m
/
*
 
(
a
l
l
 
p
l
a
t
f
o
r
m
 
s
p
e
c
s
 
f
o
l
l
o
w
 
t
h
i
s
 
m
e
t
h
o
d
o
l
o
g
y
)


-
 
I
n
t
e
g
r
a
t
i
o
n
s
/
*
 
(
a
l
l
 
i
n
t
e
g
r
a
t
i
o
n
 
s
p
e
c
s
 
f
o
l
l
o
w
 
t
h
i
s
 
m
e
t
h
o
d
o
l
o
g
y
)




*
*
D
e
v
e
l
o
p
m
e
n
t
 
P
r
o
c
e
s
s
e
s
*
*
:


-
 
C
H
A
N
G
E
L
O
G
 
c
o
n
t
r
i
b
u
t
i
o
n
 
g
u
i
d
e
 
(
s
p
e
c
 
u
p
d
a
t
e
s
)


-
 
C
I
 
w
o
r
k
f
l
o
w
s
 
(
s
p
e
c
 
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
,
 
l
i
n
t
i
n
g
,
 
t
e
s
t
i
n
g
)




#
#
 
C
o
m
p
o
n
e
n
t
 
R
e
f
e
r
e
n
c
e




|
 
P
r
o
p
e
r
t
y
 
|
 
V
a
l
u
e
 
|


|
-
-
-
-
-
-
-
-
-
|
-
-
-
-
-
-
-
|


|
 
S
p
e
c
 
F
o
r
m
a
t
 
|
 
M
a
r
k
d
o
w
n
 
(
C
o
m
m
o
n
M
a
r
k
)
 
|


|
 
T
e
m
p
l
a
t
i
n
g
 
|
 
H
e
l
m
 
t
e
m
p
l
a
t
e
 
s
y
n
t
a
x
 
f
o
r
 
v
a
l
u
e
s
 
r
e
f
e
r
e
n
c
e
s
 
|


|
 
L
i
c
e
n
s
e
 
|
 
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
 
(
a
l
l
 
s
p
e
c
s
)
 
|


|
 
H
e
a
d
e
r
s
 
|
 
S
P
D
X
 
l
i
c
e
n
s
e
 
h
e
a
d
e
r
 
a
t
 
t
o
p
 
o
f
 
e
v
e
r
y
 
f
i
l
e
 
|


|
 
S
e
c
t
i
o
n
s
 
|
 
P
u
r
p
o
s
e
,
 
N
o
n
-
G
o
a
l
s
,
 
R
e
q
u
i
r
e
m
e
n
t
s
,
 
D
e
p
e
n
d
s
 
O
n
,
 
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
,
 
C
o
m
p
o
n
e
n
t
 
R
e
f
e
r
e
n
c
e
 
|


|
 
R
e
q
u
i
r
e
m
e
n
t
 
K
e
y
w
o
r
d
s
 
|
 
R
F
C
 
2
1
1
9
 
(
S
H
A
L
L
/
M
U
S
T
/
S
H
O
U
L
D
/
M
A
Y
)
 
|


|
 
T
e
s
t
a
b
i
l
i
t
y
 
|
 
G
i
v
e
n
-
W
h
e
n
-
T
h
e
n
 
s
c
e
n
a
r
i
o
s
 
p
e
r
 
r
e
q
u
i
r
e
m
e
n
t
 
|


|
 
C
r
o
s
s
-
R
e
f
e
r
e
n
c
e
s
 
|
 
M
a
r
k
d
o
w
n
 
l
i
n
k
s
 
w
i
t
h
 
p
a
t
h
-
r
e
l
a
t
i
v
e
 
U
R
L
s
 
|


|
 
N
a
m
i
n
g
 
|
 
`
o
p
e
n
s
p
e
c
/
s
p
e
c
s
/
<
d
o
m
a
i
n
>
/
<
c
a
t
e
g
o
r
y
|
s
e
r
v
i
c
e
>
/
`
 
|


|
 
L
i
n
e
 
L
e
n
g
t
h
 
|
 
8
0
-
1
2
0
 
c
h
a
r
a
c
t
e
r
s
 
(
n
o
 
h
a
r
d
 
l
i
n
e
 
b
r
e
a
k
s
)
 
|


|
 
F
o
r
m
a
t
t
i
n
g
 
|
 
2
-
s
p
a
c
e
 
i
n
d
e
n
t
a
t
i
o
n
 
f
o
r
 
n
e
s
t
e
d
 
l
i
s
t
s
,
 
b
u
l
l
e
t
 
p
o
i
n
t
s
 
f
o
r
 
l
i
s
t
s
 
|


|
 
L
a
n
g
u
a
g
e
 
|
 
E
n
g
l
i
s
h
 
(
l
o
w
e
r
c
a
s
e
 
f
o
r
 
a
c
r
o
n
y
m
s
 
i
n
 
t
e
x
t
,
 
u
p
p
e
r
c
a
s
e
 
f
o
r
 
b
e
g
i
n
n
i
n
g
s
)
 
|


|
 
C
o
n
f
i
g
 
|
 
`
.
e
d
i
t
o
r
c
o
n
f
i
g
`
,
 
`
.
y
a
m
l
l
i
n
t
`
,
 
`
.
m
a
r
k
d
o
w
n
l
i
n
t
`
 
(
i
f
 
a
p
p
l
i
c
a
b
l
e
)
 
|


|
 
C
h
a
r
t
 
|
 
N
/
A
 
(
t
h
i
s
 
i
s
 
a
 
m
e
t
h
o
d
o
l
o
g
y
 
s
p
e
c
)
 
|


|
 
H
e
a
l
t
h
 
|
 
N
/
A
 
(
m
e
n
t
o
r
 
r
e
v
i
e
w
 
r
e
q
u
i
r
e
d
)
 
|




#
#
 
S
p
e
c
 
W
r
i
t
i
n
g
 
C
h
e
c
k
l
i
s
t




B
e
f
o
r
e
 
s
u
b
m
i
t
t
i
n
g
 
a
 
s
p
e
c
,
 
v
e
r
i
f
y
:




-
 
[
 
]
 
S
P
D
X
 
l
i
c
e
n
s
e
 
h
e
a
d
e
r
 
a
t
 
t
o
p
 
o
f
 
f
i
l
e
 
(
c
o
r
r
e
c
t
 
y
e
a
r
,
 
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
)


-
 
[
 
]
 
P
u
r
p
o
s
e
 
s
e
c
t
i
o
n
 
c
l
e
a
r
l
y
 
d
e
s
c
r
i
b
e
s
 
s
c
o
p
e
 
(
1
-
2
 
s
e
n
t
e
n
c
e
s
)


-
 
[
 
]
 
N
o
n
-
G
o
a
l
s
 
s
e
c
t
i
o
n
 
e
x
p
l
i
c
i
t
l
y
 
l
i
s
t
s
 
o
u
t
-
o
f
-
s
c
o
p
e
 
i
t
e
m
s


-
 
[
 
]
 
R
e
q
u
i
r
e
m
e
n
t
s
 
u
s
e
 
R
F
C
 
2
1
1
9
 
k
e
y
w
o
r
d
s
 
(
S
H
A
L
L
/
M
U
S
T
/
S
H
O
U
L
D
/
M
A
Y
)


-
 
[
 
]
 
E
a
c
h
 
r
e
q
u
i
r
e
m
e
n
t
 
h
a
s
 
a
t
 
l
e
a
s
t
 
o
n
e
 
G
i
v
e
n
-
W
h
e
n
-
T
h
e
n
 
s
c
e
n
a
r
i
o


-
 
[
 
]
 
S
c
e
n
a
r
i
o
s
 
a
r
e
 
t
e
s
t
a
b
l
e
 
a
n
d
 
c
o
v
e
r
 
h
a
p
p
y
/
e
r
r
o
r
 
e
d
g
e
 
c
a
s
e
s


-
 
[
 
]
 
D
e
p
e
n
d
s
 
O
n
 
s
e
c
t
i
o
n
 
l
i
s
t
s
 
s
p
e
c
i
f
i
c
 
h
o
s
t
:
p
o
r
t
/
s
e
c
r
e
t
 
r
e
f
e
r
e
n
c
e
s


-
 
[
 
]
 
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
 
s
e
c
t
i
o
n
 
l
i
s
t
s
 
A
P
I
 
c
o
n
t
r
a
c
t
s
 
a
n
d
 
s
e
r
v
i
c
e
 
i
n
t
e
g
r
a
t
i
o
n
s


-
 
[
 
]
 
C
o
m
p
o
n
e
n
t
 
R
e
f
e
r
e
n
c
e
 
t
a
b
l
e
 
h
a
s
 
A
u
t
h
,
 
D
a
t
a
b
a
s
e
,
 
C
a
c
h
e
,
 
S
t
o
r
a
g
e
,
 
P
o
r
t
s
,
 
L
i
c
e
n
s
e
,
 
C
o
n
f
i
g
,
 
C
h
a
r
t
,
 
H
e
a
l
t
h


-
 
[
 
]
 
N
o
 
b
a
r
e
 
U
R
L
s
 
(
u
s
e
 
M
a
r
k
d
o
w
n
 
l
i
n
k
s
 
w
i
t
h
 
d
e
s
c
r
i
p
t
i
v
e
 
t
e
x
t
)


-
 
[
 
]
 
N
o
 
"
T
O
D
O
"
 
o
r
 
"
F
I
X
M
E
"
 
c
o
m
m
e
n
t
s
 
(
u
s
e
 
c
h
a
n
g
e
 
p
r
o
p
o
s
a
l
s
 
i
n
 
`
/
o
p
e
n
s
p
e
c
/
c
h
a
n
g
e
s
/
`
)


-
 
[
 
]
 
C
o
d
e
 
e
x
a
m
p
l
e
s
 
a
r
e
 
v
a
l
i
d
 
J
S
O
N
/
Y
A
M
L
/
c
u
r
l
 
c
o
m
m
a
n
d
s
 
(
n
o
 
s
y
n
t
a
x
 
e
r
r
o
r
s
)


-
 
[
 
]
 
S
e
c
r
e
t
 
r
e
f
e
r
e
n
c
e
s
 
f
o
l
l
o
w
 
`
s
e
c
r
e
t
.
s
e
r
v
i
c
e
.
p
a
s
s
w
o
r
d
K
e
y
`
 
p
a
t
t
e
r
n


-
 
[
 
]
 
N
o
 
h
a
r
d
-
c
o
d
e
d
 
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
 
o
r
 
e
x
a
m
p
l
e
 
v
a
l
u
e
s
 
t
h
a
t
 
l
o
o
k
 
r
e
a
l


-
 
[
 
]
 
F
i
l
e
 
n
a
m
i
n
g
 
f
o
l
l
o
w
s
 
`
o
p
e
n
s
p
e
c
/
s
p
e
c
s
/
<
d
o
m
a
i
n
>
/
<
c
a
t
e
g
o
r
y
|
s
e
r
v
i
c
e
>
/
`


-
 
[
 
]
 
L
i
n
e
 
l
e
n
g
t
h
 
r
e
a
s
o
n
a
b
l
e
 
(
8
0
-
1
2
0
 
c
h
a
r
a
c
t
e
r
s
,
 
n
o
 
h
a
r
d
 
b
r
e
a
k
s
)


-
 
[
 
]
 
C
o
n
s
i
s
t
e
n
t
 
i
n
d
e
n
t
a
t
i
o
n
 
(
2
 
s
p
a
c
e
s
 
f
o
r
 
n
e
s
t
e
d
 
l
i
s
t
s
,
 
b
u
l
l
e
t
s
 
f
o
r
 
l
i
s
t
s
)

