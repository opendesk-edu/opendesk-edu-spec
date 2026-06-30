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
 
S
O
G
o
 
(
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
 
t
o
 
O
X
 
A
p
p
 
S
u
i
t
e
)




#
#
 
P
u
r
p
o
s
e




E
m
a
i
l
,
 
c
a
l
e
n
d
a
r
,
 
a
n
d
 
a
d
d
r
e
s
s
 
b
o
o
k
 
g
r
o
u
p
w
a
r
e
 
w
i
t
h
 
m
o
d
e
r
n
 
U
I
,
 
t
i
g
h
t
 
O
p
e
n
L
D
A
P


a
d
d
r
e
s
s
 
b
o
o
k
 
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
,
 
O
I
D
C
 
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
i
o
n
,
 
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
e
n
d
,
 
I
M
A
P
/
S
M
T
P


v
i
a
 
D
o
v
e
c
o
t
 
a
n
d
 
P
o
s
t
f
i
x
,
 
S
i
e
v
e
 
e
m
a
i
l
 
f
i
l
t
e
r
i
n
g
,
 
a
n
d
 
M
e
m
c
a
c
h
e
d
 
s
e
s
s
i
o
n
 
c
a
c
h
i
n
g
.


O
p
t
i
m
i
z
e
d
 
f
o
r
 
s
i
m
p
l
i
c
i
t
y
 
a
n
d
 
L
D
A
P
-
n
a
t
i
v
e
 
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
.




#
#
 
S
c
o
p
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
:


-
 
✅
 
*
*
I
n
 
s
c
o
p
e
*
*
:
 
S
O
G
o
 
g
r
o
u
p
w
a
r
e
 
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
 
e
m
a
i
l
/
c
a
l
e
n
d
a
r
/
c
o
n
t
a
c
t
/
t
a
s
k
 
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
,
 
O
I
D
C
 
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
i
o
n
,
 
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
e
n
d
,
 
I
M
A
P
/
S
M
T
P
 
v
i
a
 
D
o
v
e
c
o
t
-
P
o
s
t
f
i
x
,
 
S
i
e
v
e
 
e
m
a
i
l
 
f
i
l
t
e
r
i
n
g
,
 
M
e
m
c
a
c
h
e
d
 
s
e
s
s
i
o
n
 
c
a
c
h
i
n
g
,
 
L
D
A
P
-
n
a
t
i
v
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


-
 
❌
 
*
*
O
u
t
 
o
f
 
s
c
o
p
e
*
*
:
 
O
X
 
A
p
p
S
u
i
t
e
 
f
e
a
t
u
r
e
s
 
(
s
e
e
 
o
x
-
a
p
p
s
u
i
t
e
 
s
p
e
c
)
,
 
E
x
c
h
a
n
g
e
 
A
c
t
i
v
e
S
y
n
c
 
(
n
a
t
i
v
e
 
L
D
A
P
 
s
y
n
c
 
o
n
l
y
)
,
 
c
o
e
x
i
s
t
e
n
c
e
 
w
i
t
h
 
O
X
 
A
p
p
S
u
i
t
e
 
(
m
u
t
u
a
l
l
y
 
e
x
c
l
u
s
i
v
e
)




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
 
O
X
 
A
p
p
S
u
i
t
e
 
f
e
a
t
u
r
e
s
 
(
s
e
e
 
`
.
.
/
o
x
-
a
p
p
s
u
i
t
e
`
)


-
 
E
x
c
h
a
n
g
e
 
A
c
t
i
v
e
S
y
n
c
 
(
n
a
t
i
v
e
 
L
D
A
P
 
s
y
n
c
 
o
n
l
y
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
 
M
u
t
u
a
l
 
e
x
c
l
u
s
i
v
i
t
y
 
w
i
t
h
 
O
X
 
A
p
p
S
u
i
t
e




S
O
G
o
 
a
n
d
 
O
X
 
A
p
p
S
u
i
t
e
 
S
H
A
L
L
 
N
O
T
 
b
e
 
d
e
p
l
o
y
e
d
 
s
i
m
u
l
t
a
n
e
o
u
s
l
y
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
 
O
n
l
y
 
o
n
e
 
g
r
o
u
p
w
a
r
e
 
a
c
t
i
v
e


-
 
G
I
V
E
N
 
b
o
t
h
 
S
O
G
o
 
a
n
d
 
O
X
 
A
p
p
S
u
i
t
e
 
c
h
a
r
t
s
 
a
v
a
i
l
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
 
i
s
 
a
p
p
l
i
e
d


-
 
T
H
E
N
 
e
x
a
c
t
l
y
 
o
n
e
 
g
r
o
u
p
w
a
r
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
 
O
I
D
C
 
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
i
o
n
 
w
i
t
h
 
r
e
f
r
e
s
h
 
t
o
k
e
n
s




S
O
G
o
 
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
 
w
i
t
h
 
K
e
y
c
l
o
a
k
 
c
l
i
e
n
t
 
I
D
 
`
s
o
g
o
`
,


i
n
c
l
u
d
i
n
g
 
r
e
f
r
e
s
h
 
t
o
k
e
n
 
s
u
p
p
o
r
t
 
f
o
r
 
l
o
n
g
-
l
i
v
e
d
 
s
e
s
s
i
o
n
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
 
U
s
e
r
 
a
c
c
e
s
s
e
s
 
S
O
G
o


-
 
G
I
V
E
N
 
a
n
 
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
d
 
u
s
e
r


-
 
W
H
E
N
 
t
h
e
 
u
s
e
r
 
n
a
v
i
g
a
t
e
s
 
t
o
 
t
h
e
 
S
O
G
o
 
p
o
r
t
a
l
 
t
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
 
u
s
e
r
 
i
s
 
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
d
 
v
i
a
 
O
I
D
C


-
 
A
N
D
 
t
h
e
 
i
n
i
t
i
a
l
 
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
i
o
n
 
r
e
d
i
r
e
c
t
s
 
t
h
r
o
u
g
h
 
K
e
y
c
l
o
a
k


-
 
A
N
D
 
s
u
b
s
e
q
u
e
n
t
 
r
e
q
u
e
s
t
s
 
u
s
e
 
t
h
e
 
r
e
f
r
e
s
h
 
t
o
k
e
n
 
(
n
o
 
r
e
-
l
o
g
i
n
 
n
e
e
d
e
d
 
w
i
t
h
i
n
 
t
o
k
e
n
 
l
i
f
e
t
i
m
e
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
 
R
e
f
r
e
s
h
 
t
o
k
e
n
 
r
o
t
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
 
u
s
e
r
 
w
i
t
h
 
a
n
 
a
c
t
i
v
e
 
S
O
G
o
 
s
e
s
s
i
o
n


-
 
W
H
E
N
 
t
h
e
 
O
I
D
C
 
a
c
c
e
s
s
 
t
o
k
e
n
 
e
x
p
i
r
e
s


-
 
T
H
E
N
 
S
O
G
o
 
u
s
e
s
 
t
h
e
 
r
e
f
r
e
s
h
 
t
o
k
e
n
 
t
o
 
o
b
t
a
i
n
 
a
 
n
e
w
 
a
c
c
e
s
s
 
t
o
k
e
n


-
 
A
N
D
 
t
h
e
 
u
s
e
r
'
s
 
s
e
s
s
i
o
n
 
c
o
n
t
i
n
u
e
s
 
w
i
t
h
o
u
t
 
r
e
-
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
i
o
n




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
 
O
I
D
C
 
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


-
 
G
I
V
E
N
 
S
O
G
o
 
w
i
t
h
 
O
I
D
C
 
e
n
a
b
l
e
d
 
(
`
s
o
g
o
.
o
i
d
c
.
e
n
a
b
l
e
d
:
 
t
r
u
e
`
)


-
 
T
H
E
N
 
t
h
e
 
O
p
e
n
I
D
-
C
o
n
n
e
c
t
 
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
 
U
R
L
 
p
o
i
n
t
s
 
t
o
 
K
e
y
c
l
o
a
k
'
s
 
w
e
l
l
-
k
n
o
w
n
 
e
n
d
p
o
i
n
t


-
 
A
N
D
 
t
h
e
 
c
l
i
e
n
t
 
I
D
 
i
s
 
`
s
o
g
o
`


-
 
A
N
D
 
s
c
o
p
e
 
i
n
c
l
u
d
e
s
 
`
o
p
e
n
i
d
 
p
r
o
f
i
l
e
 
e
m
a
i
l
`


-
 
A
N
D
 
`
S
O
G
o
O
p
e
n
I
d
E
n
a
b
l
e
R
e
f
r
e
s
h
T
o
k
e
n
`
 
i
s
 
`
Y
E
S
`


-
 
A
N
D
 
`
S
O
G
o
O
p
e
n
I
d
T
o
k
e
n
C
h
e
c
k
I
n
t
e
r
v
a
l
`
 
i
s
 
`
3
6
0
0
`
 
(
t
o
k
e
n
 
c
h
e
c
k
 
e
v
e
r
y
 
h
o
u
r
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
 
I
M
A
P
 
a
c
c
e
s
s
 
v
i
a
 
D
o
v
e
c
o
t




S
O
G
o
 
S
H
A
L
L
 
a
c
c
e
s
s
 
m
a
i
l
b
o
x
e
s
 
v
i
a
 
I
M
A
P
S
 
t
h
r
o
u
g
h
 
D
o
v
e
c
o
t
 
a
s
 
t
h
e
 
I
M
A
P
 
s
e
r
v
e
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
 
I
M
A
P
 
m
a
i
l
b
o
x
 
a
c
c
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
 
u
s
e
r
 
w
i
t
h
 
a
n
 
e
m
a
i
l
 
a
c
c
o
u
n
t
 
i
n
 
S
O
G
o


-
 
W
H
E
N
 
t
h
e
 
u
s
e
r
 
c
o
n
n
e
c
t
s
 
v
i
a
 
I
M
A
P
 
(
e
.
g
.
,
 
T
h
u
n
d
e
r
b
i
r
d
,
 
A
p
p
l
e
 
M
a
i
l
)


-
 
T
H
E
N
 
t
h
e
 
c
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
o
u
t
e
s
 
t
o
 
D
o
v
e
c
o
t
 
a
t
 
`
i
m
a
p
s
:
/
/
d
o
v
e
c
o
t
:
9
9
3
`


-
 
A
N
D
 
m
a
i
l
 
f
o
l
d
e
r
s
 
(
I
n
b
o
x
,
 
S
e
n
t
,
 
D
r
a
f
t
s
)
 
a
r
e
 
s
y
n
c
h
r
o
n
i
z
e
d


-
 
A
N
D
 
S
O
G
o
 
s
h
o
w
s
 
t
h
e
 
s
a
m
e
 
f
o
l
d
e
r
 
s
t
r
u
c
t
u
r
e
 
a
s
 
t
h
e
 
m
a
i
l
 
c
l
i
e
n
t




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
M
A
P
 
o
v
e
r
 
T
L
S


-
 
G
I
V
E
N
 
a
 
u
s
e
r
 
c
o
n
n
e
c
t
i
n
g
 
v
i
a
 
I
M
A
P
S


-
 
W
H
E
N
 
t
h
e
 
c
o
n
n
e
c
t
i
o
n
 
i
s
 
e
s
t
a
b
l
i
s
h
e
d


-
 
T
H
E
N
 
T
L
S
 
e
n
c
r
y
p
t
i
o
n
 
i
s
 
e
n
f
o
r
c
e
d
 
b
y
 
D
o
v
e
c
o
t


-
 
A
N
D
 
t
h
e
 
c
o
n
n
e
c
t
i
o
n
 
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
 
i
s
 
s
i
g
n
e
d
 
b
y
 
t
h
e
 
p
l
a
t
f
o
r
m
 
C
A




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
M
T
P
 
m
a
i
l
 
d
e
l
i
v
e
r
y
 
v
i
a
 
P
o
s
t
f
i
x




S
O
G
o
 
S
H
A
L
L
 
s
e
n
d
 
a
n
d
 
r
e
c
e
i
v
e
 
e
m
a
i
l
 
t
h
r
o
u
g
h
 
P
o
s
t
f
i
x
 
a
s
 
t
h
e
 
S
M
T
P
 
s
e
r
v
e
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
e
n
d
i
n
g
 
e
m
a
i
l
 
v
i
a
 
S
M
T
P


-
 
G
I
V
E
N
 
a
 
u
s
e
r
 
c
o
m
p
o
s
i
n
g
 
a
n
 
e
m
a
i
l
 
i
n
 
S
O
G
o


-
 
W
H
E
N
 
t
h
e
 
u
s
e
r
 
c
l
i
c
k
s
 
S
e
n
d


-
 
T
H
E
N
 
t
h
e
 
e
m
a
i
l
 
i
s
 
r
e
l
a
y
e
d
 
t
o
 
P
o
s
t
f
i
x
 
a
t
 
`
s
m
t
p
:
/
/
p
o
s
t
f
i
x
:
5
8
7
`


-
 
A
N
D
 
P
o
s
t
f
i
x
 
h
a
n
d
l
e
s
 
D
N
S
 
M
X
 
r
e
c
o
r
d
 
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
 
a
n
d
 
d
e
l
i
v
e
r
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
 
R
e
c
e
i
v
i
n
g
 
e
m
a
i
l


-
 
G
I
V
E
N
 
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
 
s
e
n
d
e
r
 
s
e
n
d
i
n
g
 
m
a
i
l
 
t
o
 
t
h
e
 
u
s
e
r
'
s
 
a
d
d
r
e
s
s


-
 
W
H
E
N
 
t
h
e
 
m
a
i
l
 
a
r
r
i
v
e
s
 
a
t
 
P
o
s
t
f
i
x


-
 
T
H
E
N
 
P
o
s
t
f
i
x
 
d
e
l
i
v
e
r
s
 
i
t
 
t
o
 
D
o
v
e
c
o
t


-
 
A
N
D
 
S
O
G
o
 
s
h
o
w
s
 
t
h
e
 
n
e
w
 
m
a
i
l
 
i
n
 
t
h
e
 
I
n
b
o
x




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
M
T
P
 
s
u
b
m
i
s
s
i
o
n
 
w
i
t
h
 
S
T
A
R
T
T
L
S


-
 
G
I
V
E
N
 
a
 
c
l
i
e
n
t
 
c
o
n
n
e
c
t
i
n
g
 
t
o
 
P
o
s
t
f
i
x
 
o
n
 
p
o
r
t
 
5
8
7


-
 
T
H
E
N
 
S
T
A
R
T
T
L
S
 
i
s
 
a
v
a
i
l
a
b
l
e


-
 
A
N
D
 
t
h
e
 
c
o
n
n
e
c
t
i
o
n
 
i
s
 
u
p
g
r
a
d
e
d
 
t
o
 
T
L
S
 
b
e
f
o
r
e
 
m
a
i
l
 
s
u
b
m
i
s
s
i
o
n




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
i
e
v
e
 
e
m
a
i
l
 
f
i
l
t
e
r
i
n
g
 
v
i
a
 
D
o
v
e
c
o
t




S
O
G
o
 
S
H
A
L
L
 
d
e
l
e
g
a
t
e
 
s
e
r
v
e
r
-
s
i
d
e
 
e
m
a
i
l
 
f
i
l
t
e
r
i
n
g
 
t
o
 
D
o
v
e
c
o
t
 
S
i
e
v
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
 
S
i
e
v
e
 
s
c
r
i
p
t
 
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
 
G
I
V
E
N
 
a
n
 
a
d
m
i
n
i
s
t
r
a
t
o
r
 
c
o
n
f
i
g
u
r
i
n
g
 
e
m
a
i
l
 
f
i
l
t
e
r
s


-
 
W
H
E
N
 
S
i
e
v
e
 
s
c
r
i
p
t
s
 
a
r
e
 
u
p
l
o
a
d
e
d
 
t
o
 
D
o
v
e
c
o
t


-
 
T
H
E
N
 
S
O
G
o
 
d
i
s
p
l
a
y
s
 
t
h
e
 
f
i
l
t
e
r
 
r
u
l
e
s
 
i
n
 
t
h
e
 
s
e
t
t
i
n
g
s
 
U
I


-
 
A
N
D
 
i
n
c
o
m
i
n
g
 
m
a
i
l
 
i
s
 
a
u
t
o
m
a
t
i
c
a
l
l
y
 
s
o
r
t
e
d
/
f
i
l
t
e
r
e
d
 
p
e
r
 
s
c
r
i
p
t
 
r
u
l
e
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
i
e
v
e
 
c
o
n
n
e
c
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
 
S
O
G
o
 
w
i
t
h
 
S
i
e
v
e
 
e
n
a
b
l
e
d


-
 
W
H
E
N
 
t
h
e
 
S
i
e
v
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
 
a
t
 
`
s
i
e
v
e
:
/
/
d
o
v
e
c
o
t
:
4
1
9
0
`


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
r
v
e
r
-
s
i
d
e
 
f
i
l
t
e
r
i
n
g
 
s
e
r
v
i
c
e
 
i
s
 
a
v
a
i
l
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
 
O
p
e
n
L
D
A
P
 
a
d
d
r
e
s
s
 
b
o
o
k
 
s
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




S
O
G
o
 
S
H
A
L
L
 
u
s
e
 
O
p
e
n
L
D
A
P
 
a
s
 
i
t
s
 
p
r
i
m
a
r
y
 
a
d
d
r
e
s
s
 
b
o
o
k
,
 
s
y
n
c
h
r
o
n
i
z
i
n
g


u
s
e
r
 
c
o
n
t
a
c
t
 
i
n
f
o
r
m
a
t
i
o
n
 
v
i
a
 
L
D
A
P
 
b
i
n
d
 
q
u
e
r
i
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
 
A
d
d
r
e
s
s
 
b
o
o
k
 
p
o
p
u
l
a
t
e
d
 
f
r
o
m
 
L
D
A
P


-
 
G
I
V
E
N
 
a
 
u
s
e
r
 
i
n
 
t
h
e
 
O
p
e
n
L
D
A
P
 
d
i
r
e
c
t
o
r
y
 
w
i
t
h
 
`
c
n
`
,
 
`
u
i
d
`
,
 
`
m
a
i
l
`
 
a
t
t
r
i
b
u
t
e
s


-
 
W
H
E
N
 
t
h
e
 
u
s
e
r
 
a
c
c
e
s
s
e
s
 
t
h
e
 
S
O
G
o
 
a
d
d
r
e
s
s
 
b
o
o
k


-
 
T
H
E
N
 
c
o
n
t
a
c
t
 
d
a
t
a
 
i
s
 
f
e
t
c
h
e
d
 
f
r
o
m
 
O
p
e
n
L
D
A
P


-
 
A
N
D
 
c
h
a
n
g
e
s
 
i
n
 
L
D
A
P
 
p
r
o
p
a
g
a
t
e
 
t
o
 
t
h
e
 
S
O
G
o
 
a
d
d
r
e
s
s
 
b
o
o
k


-
 
A
N
D
 
`
b
i
n
d
F
i
e
l
d
s
`
 
m
a
t
c
h
:
 
`
(
u
i
d
,
 
m
a
i
l
)
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
D
A
P
 
r
e
a
d
-
o
n
l
y


-
 
G
I
V
E
N
 
S
O
G
o
'
s
 
L
D
A
P
 
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
f
i
g
u
r
e
d


-
 
T
H
E
N
 
`
b
i
n
d
_
p
a
s
s
w
o
r
d
`
 
i
s
 
s
e
t
 
t
o
 
`
"
d
i
s
a
b
l
e
d
"
`


-
 
A
N
D
 
`
w
r
i
t
e
_
d
i
s
a
b
l
e
d
`
 
i
s
 
s
e
t
 
t
o
 
`
t
r
u
e
`


-
 
A
N
D
 
S
O
G
o
 
c
a
n
n
o
t
 
m
o
d
i
f
y
 
L
D
A
P
 
e
n
t
r
i
e
s
 
(
a
d
d
r
e
s
s
 
b
o
o
k
 
i
s
 
L
D
A
P
-
a
u
t
h
o
r
i
t
a
t
i
v
e
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
a
l
e
n
d
a
r
 
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




S
O
G
o
 
S
H
A
L
L
 
p
r
o
v
i
d
e
 
c
a
l
e
n
d
a
r
 
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
 
w
i
t
h
 
e
v
e
n
t
 
c
r
e
a
t
i
o
n
,
 
e
d
i
t
i
n
g
,


f
r
e
e
/
b
u
s
y
 
l
o
o
k
u
p
,
 
a
n
d
 
s
h
a
r
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
 
C
a
l
e
n
d
a
r
 
e
v
e
n
t
 
p
e
r
s
i
s
t
e
n
c
e


-
 
G
I
V
E
N
 
a
 
u
s
e
r
 
c
r
e
a
t
i
n
g
 
a
 
c
a
l
e
n
d
a
r
 
e
v
e
n
t


-
 
W
H
E
N
 
t
h
e
 
e
v
e
n
t
 
i
s
 
s
a
v
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
 
e
v
e
n
t
 
i
s
 
s
t
o
r
e
d
 
i
n
 
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


-
 
A
N
D
 
t
h
e
 
e
v
e
n
t
 
i
s
 
v
i
s
i
b
l
e
 
i
n
 
t
h
e
 
S
O
G
o
 
c
a
l
e
n
d
a
r
 
v
i
e
w


-
 
A
N
D
 
f
r
e
e
/
b
u
s
y
 
i
n
f
o
r
m
a
t
i
o
n
 
i
s
 
c
a
l
c
u
l
a
t
e
d
 
c
o
r
r
e
c
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
 
C
a
l
e
n
d
a
r
 
e
v
e
n
t
 
s
h
a
r
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
 
u
s
e
r
 
s
h
a
r
i
n
g
 
a
 
c
a
l
e
n
d
a
r


-
 
W
H
E
N
 
t
h
e
 
s
h
a
r
e
d
 
c
a
l
e
n
d
a
r
'
s
 
e
v
e
n
t
 
c
h
a
n
g
e
s


-
 
T
H
E
N
 
a
t
t
e
n
d
e
e
s
 
s
e
e
 
t
h
e
 
u
p
d
a
t
e
d
 
e
v
e
n
t


-
 
A
N
D
 
a
l
a
r
m
 
n
o
t
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
 
a
r
e
 
s
e
n
t
 
v
i
a
 
e
m
a
i
l




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
 
F
r
e
e
/
b
u
s
y
 
l
o
o
k
u
p


-
 
G
I
V
E
N
 
a
 
u
s
e
r
 
s
c
h
e
d
u
l
i
n
g
 
a
 
m
e
e
t
i
n
g
 
w
i
t
h
 
o
t
h
e
r
 
S
O
G
o
 
u
s
e
r
s


-
 
W
H
E
N
 
t
h
e
 
u
s
e
r
 
c
h
e
c
k
s
 
a
t
t
e
n
d
e
e
 
a
v
a
i
l
a
b
i
l
i
t
y


-
 
T
H
E
N
 
S
O
G
o
 
q
u
e
r
i
e
s
 
a
l
l
 
a
t
t
e
n
d
e
e
s
'
 
c
a
l
e
n
d
a
r
s


-
 
A
N
D
 
f
r
e
e
/
b
u
s
y
 
s
l
o
t
s
 
a
r
e
 
d
i
s
p
l
a
y
e
d
 
f
o
r
 
t
i
m
e
 
s
l
o
t
 
s
e
l
e
c
t
i
o
n




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
e
m
c
a
c
h
e
d
 
s
e
s
s
i
o
n
 
c
a
c
h
i
n
g




S
O
G
o
 
S
H
A
L
L
 
u
s
e
 
M
e
m
c
a
c
h
e
d
 
f
o
r
 
s
e
s
s
i
o
n
 
d
a
t
a
 
c
a
c
h
i
n
g
 
t
o
 
i
m
p
r
o
v
e
 
p
e
r
f
o
r
m
a
n
c
e


o
n
 
c
o
n
c
u
r
r
e
n
t
 
s
e
s
s
i
o
n
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
 
S
e
s
s
i
o
n
 
s
t
o
r
e
 
a
c
c
e
s
s


-
 
G
I
V
E
N
 
S
O
G
o
 
w
i
t
h
 
M
e
m
c
a
c
h
e
d
 
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
 
a
t
 
`
m
e
m
c
a
c
h
e
d
:
1
1
2
1
1
`


-
 
W
H
E
N
 
a
 
s
e
s
s
i
o
n
 
i
s
 
c
r
e
a
t
e
d
 
o
r
 
a
c
c
e
s
s
e
d


-
 
T
H
E
N
 
s
e
s
s
i
o
n
 
d
a
t
a
 
i
s
 
c
a
c
h
e
d
 
i
n
 
M
e
m
c
a
c
h
e
d


-
 
A
N
D
 
s
e
s
s
i
o
n
s
 
s
u
r
v
i
v
e
 
p
o
d
 
r
e
s
t
a
r
t
s
 
i
f
 
M
e
m
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
 
p
e
r
s
i
s
t
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
 
M
e
m
c
a
c
h
e
d
 
u
n
a
v
a
i
l
a
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
 
M
e
m
c
a
c
h
e
d
 
s
e
r
v
i
c
e
 
d
o
w
n


-
 
W
H
E
N
 
S
O
G
o
 
a
c
c
e
s
s
e
s
 
s
e
s
s
i
o
n
 
d
a
t
a


-
 
T
H
E
N
 
s
e
s
s
i
o
n
s
 
f
a
l
l
 
b
a
c
k
 
t
o
 
d
a
t
a
b
a
s
e
 
s
t
o
r
a
g
e


-
 
A
N
D
 
t
h
e
 
u
s
e
r
 
r
e
m
a
i
n
s
 
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
d
 
(
n
o
 
l
o
g
o
u
t
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
 
M
u
l
t
i
-
u
s
e
r
 
s
o
u
r
c
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




S
O
G
o
 
S
H
A
L
L
 
s
u
p
p
o
r
t
 
c
o
n
f
i
g
u
r
i
n
g
 
m
u
l
t
i
p
l
e
 
a
d
d
r
e
s
s
 
b
o
o
k
 
s
o
u
r
c
e
s
 
b
e
y
o
n
d
 
L
D
A
P
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
 
L
D
A
P
 
a
d
d
r
e
s
s
 
b
o
o
k
 
s
o
u
r
c
e


-
 
G
I
V
E
N
 
S
O
G
o
 
w
i
t
h
 
`
S
O
G
o
U
s
e
r
S
o
u
r
c
e
s
`


-
 
W
H
E
N
 
e
x
a
c
t
l
y
 
o
n
e
 
s
o
u
r
c
e
 
o
f
 
t
y
p
e
 
`
l
d
a
p
`
 
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
 
T
H
E
N
 
a
l
l
 
a
d
d
r
e
s
s
 
b
o
o
k
 
l
o
o
k
u
p
s
 
q
u
e
r
y
 
O
p
e
n
L
D
A
P


-
 
A
N
D
 
t
h
e
 
s
o
u
r
c
e
 
i
s
 
l
a
b
e
l
e
d
 
"
U
s
e
r
s
"




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
 
H
e
a
l
t
h
 
p
r
o
b
e
s




S
O
G
o
 
S
H
A
L
L
 
e
x
p
o
s
e
 
l
i
v
e
n
e
s
s
 
a
n
d
 
r
e
a
d
i
n
e
s
s
 
p
r
o
b
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
 
S
e
r
v
i
c
e
 
h
e
a
l
t
h
 
c
h
e
c
k


-
 
G
I
V
E
N
 
S
O
G
o
 
d
e
p
l
o
y
e
d
 
a
n
d
 
r
u
n
n
i
n
g


-
 
T
H
E
N
 
t
h
e
 
c
o
n
t
a
i
n
e
r
 
r
e
s
p
o
n
d
s
 
o
n
 
p
o
r
t
 
8
0


-
 
A
N
D
 
u
n
h
e
a
l
t
h
y
 
p
o
d
s
 
a
r
e
 
r
e
s
t
a
r
t
e
d
 
b
y
 
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




#
#
 
S
e
c
u
r
i
t
y
 
C
o
n
t
e
x
t




|
 
C
o
m
p
o
n
e
n
t
 
|
 
R
u
n
A
s
U
s
e
r
 
|
 
C
a
p
a
b
i
l
i
t
i
e
s
 
|
 
S
e
c
c
o
m
p
 
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
-
-
|


|
 
S
O
G
o
 
(
s
o
g
o
d
)
 
|
 
1
0
0
0
 
(
s
o
g
o
)
 
|
 
d
r
o
p
:
 
A
L
L
 
|
 
R
u
n
t
i
m
e
D
e
f
a
u
l
t
 
|




#
#
 
K
n
o
w
n
 
Q
u
i
r
k
s




*
*
M
e
m
c
a
c
h
e
d
 
v
s
 
R
e
d
i
s
*
*
:
 
S
O
G
o
 
u
s
e
s
 
M
e
m
c
a
c
h
e
d
 
(
n
o
t
 
t
h
e
 
s
h
a
r
e
d
 
R
e
d
i
s
)
 
f
o
r
 
s
e
s
s
i
o
n
 
c
a
c
h
i
n
g
.
 
M
e
m
c
a
c
h
e
d
 
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
 
a
s
 
a
 
s
e
p
a
r
a
t
e
 
c
o
n
t
a
i
n
e
r
 
i
n
 
t
h
e
 
S
O
G
o
 
c
h
a
r
t
.


*
*
M
u
t
u
a
l
 
e
x
c
l
u
s
i
v
i
t
y
*
*
:
 
S
O
G
o
 
a
n
d
 
O
X
 
A
p
p
S
u
i
t
e
 
M
U
S
T
 
N
O
T
 
b
e
 
d
e
p
l
o
y
e
d
 
s
i
m
u
l
t
a
n
e
o
u
s
l
y
.
 
B
o
t
h
 
p
r
o
v
i
d
e
 
e
m
a
i
l
/
c
a
l
e
n
d
a
r
/
g
r
o
u
p
w
a
r
e
 
a
n
d
 
w
o
u
l
d
 
c
o
n
f
l
i
c
t
.




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




*
*
A
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
i
o
n
*
*
:


-
 
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
 
(
`
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
a
u
t
h
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
k
/
.
w
e
l
l
-
k
n
o
w
n
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
`
,
 
c
l
i
e
n
t
:
 
`
s
o
g
o
`
,
 
s
e
c
r
e
t
:
 
`
s
o
g
o
-
o
i
d
c
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
`
 
f
r
o
m
 
`
s
o
g
o
-
s
o
g
o
`
 
s
e
c
r
e
t
)


-
 
O
p
e
n
L
D
A
P
 
(
`
l
d
a
p
:
/
/
o
p
e
n
l
d
a
p
:
3
8
9
`
,
 
b
i
n
d
:
 
`
u
i
d
=
l
d
a
p
s
e
a
r
c
h
_
s
o
g
o
,
c
n
=
u
s
e
r
s
,
d
c
=
o
p
e
n
d
e
s
k
,
d
c
=
e
d
u
`
,
 
p
a
s
s
w
o
r
d
:
 
`
s
e
c
r
e
t
.
s
o
g
o
.
l
d
a
p
_
p
a
s
s
w
o
r
d
`
)




*
*
D
a
t
a
 
S
t
o
r
e
*
*
:


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
 
(
`
s
o
g
o
`
 
D
B
,
 
h
o
s
t
:
 
`
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
:
5
4
3
2
`
,
 
u
s
e
r
:
 
`
s
o
g
o
_
u
s
e
r
`
,
 
p
a
s
s
w
o
r
d
:
 
`
s
e
c
r
e
t
.
s
o
g
o
.
p
s
q
l
_
p
a
s
s
w
o
r
d
`
)


-
 
R
e
d
i
s
 
(
`
r
e
d
i
s
:
6
3
7
9
`
,
 
p
a
s
s
w
o
r
d
:
 
`
s
e
c
r
e
t
.
s
o
g
o
.
r
e
d
i
s
_
p
a
s
s
w
o
r
d
`
)
 
/
 
M
e
m
c
a
c
h
e
d
 
(
`
m
e
m
c
a
c
h
e
d
:
1
1
2
1
1
`
)




*
*
M
a
i
l
*
*
:


-
 
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
 
(
`
i
m
a
p
s
:
/
/
d
o
v
e
c
o
t
:
9
9
3
`
,
 
s
e
 
e
l
s
e
:
 
`
s
e
c
r
e
t
.
s
o
g
o
.
i
m
a
p
_
p
a
s
s
w
o
r
d
`
)


-
 
P
o
s
t
f
i
x
 
S
M
T
P
 
(
s
u
b
m
i
s
s
i
o
n
:
 
`
s
m
t
p
:
/
/
p
o
s
t
f
i
x
:
5
8
7
`
 
S
T
A
R
T
T
L
S
,
 
s
e
 
e
l
s
e
:
 
`
s
e
c
r
e
t
.
s
o
g
o
.
s
m
t
p
_
p
a
s
s
w
o
r
d
`
)


-
 
D
o
v
e
c
o
t
 
S
i
e
v
e
 
(
`
s
i
e
v
e
:
/
/
d
o
v
e
c
o
t
:
4
1
9
0
`
)




*
*
I
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
*
*
:


-
 
H
A
P
r
o
x
y
 
I
n
g
r
e
s
s
 
(
H
A
P
r
o
x
y
 
r
o
u
t
e
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
:
 
`
h
a
p
r
o
x
y
`
)


-
 
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
 
(
n
a
v
i
g
a
t
i
o
n
 
t
i
l
e
,
 
n
a
v
i
g
a
t
i
o
n
.
j
s
o
n
 
e
n
d
p
o
i
n
t
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
A
P
I
 
C
o
n
t
r
a
c
t
s
*
*
:


-
 
[
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
 
T
o
k
e
n
]
(
.
.
/
.
.
/
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
/
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
#
c
o
n
t
r
a
c
t
-
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
i
d
c
-
t
o
k
e
n
-
e
n
d
p
o
i
n
t
)
 
—
 
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
i
o
n


-
 
[
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
]
(
.
.
/
.
.
/
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
/
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
#
c
o
n
t
r
a
c
t
-
d
o
v
e
c
o
t
-
i
m
a
p
)
 
—
 
e
m
a
i
l
 
a
c
c
e
s
s


-
 
[
P
o
s
t
f
i
x
 
S
M
T
P
]
(
.
.
/
.
.
/
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
/
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
#
c
o
n
t
r
a
c
t
-
p
o
s
t
f
i
x
-
s
m
t
p
-
s
u
b
m
i
s
s
i
o
n
)
 
—
 
e
m
a
i
l
 
s
e
n
d
i
n
g


-
 
[
L
D
A
P
 
B
i
n
d
/
S
e
a
r
c
h
]
(
.
.
/
.
.
/
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
/
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
#
c
o
n
t
r
a
c
t
-
l
d
a
p
-
b
i
n
d
-
a
n
d
-
s
e
a
r
c
h
)
 
—
 
a
d
d
r
e
s
s
 
b
o
o
k
 
s
y
n
c


-
 
[
N
u
b
u
s
 
N
a
v
i
g
a
t
i
o
n
]
(
.
.
/
.
.
/
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
/
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
#
c
o
n
t
r
a
c
t
-
n
u
b
u
s
-
p
o
r
t
a
l
-
n
a
v
i
g
a
t
i
o
n
)
 
—
 
p
o
r
t
a
l
 
t
i
l
e




*
*
S
e
r
v
i
c
e
s
*
*
:


-
 
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
 
(
t
i
l
e
:
 
d
i
s
p
l
a
y
,
 
u
r
l
:
 
`
h
t
t
p
s
:
/
/
s
o
g
o
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
S
O
G
o
/
`
,
 
i
c
o
n
,
 
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
 
P
o
s
t
f
i
x
 
(
m
a
i
l
 
r
e
l
a
y
 
f
o
r
 
o
u
t
g
o
i
n
g
 
S
M
T
P
 
v
i
a
 
`
s
m
t
p
:
/
/
p
o
s
t
f
i
x
:
5
8
7
`
 
S
T
A
R
T
T
L
S
)


-
 
D
o
v
e
c
o
t
 
(
I
M
A
P
 
a
c
c
e
s
s
 
f
o
r
 
i
n
c
o
m
i
n
g
 
m
a
i
l
 
v
i
a
 
`
i
m
a
p
s
:
/
/
d
o
v
e
c
o
t
:
9
9
3
`
)


-
 
O
p
e
n
L
D
A
P
 
(
a
d
d
r
e
s
s
 
b
o
o
k
 
a
u
t
o
-
p
o
p
u
l
a
t
i
o
n
 
f
r
o
m
 
`
o
u
=
c
o
n
t
a
c
t
s
,
d
c
=
o
p
e
n
d
e
s
k
,
d
c
=
e
d
u
`
)


-
 
S
M
T
P
 
R
e
l
a
y
 
(
m
a
i
l
 
d
e
l
i
v
e
r
y
 
t
o
 
`
*
@
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
e
d
u
`
 
v
i
a
 
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
e
m
a
i
l
`
 
t
r
a
n
s
p
o
r
t
)


-
 
I
L
I
A
S
 
(
c
o
u
r
s
e
 
n
o
t
i
f
i
c
a
t
i
o
n
 
e
m
a
i
l
s
 
v
i
a
 
m
a
i
l
 
c
h
a
n
n
e
l
,
 
n
o
t
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
@
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
e
d
u
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
 
A
u
t
h
 
|
 
O
I
D
C
 
(
c
l
i
e
n
t
:
 
`
s
o
g
o
`
,
 
i
s
s
u
e
r
:
 
K
e
y
c
l
o
a
k
)
 
|


|
 
D
a
t
a
b
a
s
e
 
|
 
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
 
(
`
s
o
g
o
`
 
D
B
,
 
`
s
o
g
o
_
u
s
e
r
`
)
 
|


|
 
C
a
c
h
e
 
|
 
M
e
m
c
a
c
h
e
d
 
(
`
m
e
m
c
a
c
h
e
d
:
1
1
2
1
1
`
)
 
|


|
 
I
M
A
P
 
|
 
D
o
v
e
c
o
t
 
(
`
i
m
a
p
s
:
/
/
d
o
v
e
c
o
t
:
9
9
3
`
)
 
|


|
 
S
M
T
P
 
|
 
P
o
s
t
f
i
x
 
(
`
s
m
t
p
:
/
/
p
o
s
t
f
i
x
:
5
8
7
`
,
 
S
T
A
R
T
T
L
S
 
o
n
 
5
8
7
)
 
|


|
 
S
i
e
v
e
 
|
 
D
o
v
e
c
o
t
 
(
`
s
i
e
v
e
:
/
/
d
o
v
e
c
o
t
:
4
1
9
0
`
)
 
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
 
L
G
P
L
-
3
.
0
 
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
d
a
t
a
b
a
s
e
s
.
s
o
g
o
.
*
`
,
 
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
a
p
p
s
/
s
o
g
o
/
v
a
l
u
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
 
|


|
 
C
h
a
r
t
 
|
 
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
c
h
a
r
t
s
/
s
o
g
o
/
`
 
(
l
o
c
a
l
 
c
h
a
r
t
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
 
P
o
r
t
 
8
0
 
|


|
 
S
S
O
 
v
i
a
 
|
 
S
h
i
b
b
o
l
e
t
h
 
→
 
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
 
(
d
i
s
a
b
l
e
d
 
i
n
 
e
d
u
 
—
 
u
s
e
s
 
O
I
D
C
 
i
n
s
t
e
a
d
)
 
|


|
 
L
D
A
P
 
b
i
n
d
 
|
 
O
p
e
n
L
D
A
P
 
(
`
o
u
=
u
s
e
r
s
,
d
c
=
o
p
e
n
d
e
s
k
,
d
c
=
e
d
u
`
)
,
 
b
i
n
d
D
N
 
`
u
i
d
=
s
o
g
o
,
o
u
=
s
e
r
v
i
c
e
s
`
 
|


|
 
D
o
v
e
c
o
t
 
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
 
|
 
I
M
A
P
,
 
S
i
e
v
e
,
 
M
a
n
a
g
e
d
 
F
o
l
d
e
r
s
,
 
S
h
a
r
e
d
 
N
a
m
e
s
p
a
c
e
 
|




#
#
 
S
L
O




*
*
T
i
e
r
*
*
:
 
C
r
i
t
i
c
a
l
 
(
e
m
a
i
l
 
i
s
 
e
s
s
e
n
t
i
a
l
 
f
o
r
 
c
o
m
m
u
n
i
c
a
t
i
o
n
)




|
 
M
e
t
r
i
c
 
|
 
T
a
r
g
e
t
 
|
 
M
e
a
s
u
r
e
m
e
n
t
 
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
|
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
-
-
-
-
-
-
|


|
 
*
*
A
v
a
i
l
a
b
i
l
i
t
y
*
*
 
|
 
9
9
.
9
%
 
(
4
3
.
2
 
m
i
n
 
d
o
w
n
t
i
m
e
/
m
o
n
t
h
 
m
a
x
)
 
|
 
U
p
t
i
m
e
 
o
v
e
r
 
3
0
-
d
a
y
 
w
i
n
d
o
w
 
|


|
 
*
*
L
a
t
e
n
c
y
 
(
P
9
5
)
*
*
 
|
 
<
5
0
0
m
s
 
(
w
e
b
m
a
i
l
 
p
a
g
e
 
l
o
a
d
)
 
|
 
A
p
a
c
h
e
 
a
c
c
e
s
s
 
l
o
g
 
a
n
a
l
y
s
i
s
 
|


|
 
*
*
L
a
t
e
n
c
y
 
(
P
9
5
)
*
*
 
|
 
<
2
0
0
m
s
 
(
I
M
A
P
 
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
 
|
 
D
o
v
e
c
o
t
 
m
e
t
r
i
c
s
 
|


|
 
*
*
E
r
r
o
r
 
R
a
t
e
*
*
 
|
 
<
0
.
1
%
 
(
H
T
T
P
 
5
x
x
)
 
|
 
A
p
a
c
h
e
 
a
c
c
e
s
s
 
l
o
g
 
a
n
a
l
y
s
i
s
 
|


|
 
*
*
S
i
e
v
e
 
F
i
l
t
e
r
 
S
u
c
c
e
s
s
*
*
 
|
 
>
9
9
%
 
(
e
m
a
i
l
 
f
i
l
t
e
r
i
n
g
)
 
|
 
S
i
e
v
e
 
l
o
g
 
a
n
a
l
y
s
i
s
 
|




*
*
A
l
e
r
t
s
*
*
:


-
 
S
O
G
o
 
5
x
x
 
e
r
r
o
r
 
r
a
t
e
 
>
0
.
5
%
 
f
o
r
 
5
 
m
i
n
u
t
e
s
 
→
 
P
1
 
a
l
e
r
t


-
 
I
M
A
P
 
c
o
n
n
e
c
t
i
o
n
 
f
a
i
l
u
r
e
s
 
>
3
 
i
n
 
5
 
m
i
n
u
t
e
s
 
→
 
P
1
 
a
l
e
r
t


-
 
L
D
A
P
 
b
i
n
d
 
f
a
i
l
u
r
e
s
 
>
2
%
 
f
o
r
 
5
 
m
i
n
u
t
e
s
 
→
 
P
1
 
a
l
e
r
t


-
 
M
e
m
c
a
c
h
e
d
 
c
o
n
n
e
c
t
i
o
n
 
e
r
r
o
r
s
 
>
3
 
i
n
 
5
 
m
i
n
u
t
e
s
 
→
 
P
2
 
a
l
e
r
t


-
 
D
a
t
a
b
a
s
e
 
c
o
n
n
e
c
t
i
o
n
 
p
o
o
l
 
e
x
h
a
u
s
t
e
d
 
→
 
P
2
 
a
l
e
r
t




*
*
C
a
p
a
c
i
t
y
*
*
:


-
 
5
,
0
0
0
 
c
o
n
c
u
r
r
e
n
t
 
w
e
b
m
a
i
l
 
u
s
e
r
s


-
 
5
0
,
0
0
0
 
I
M
A
P
 
c
o
n
n
e
c
t
i
o
n
s
 
(
t
o
t
a
l
)


-
 
1
0
0
,
0
0
0
 
e
m
a
i
l
s
 
p
e
r
 
d
a
y
 
(
t
y
p
i
c
a
l
 
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
:
 
5
 
G
B
 
(
t
y
p
i
c
a
l
)
,
 
5
0
 
G
B
 
(
l
a
r
g
e
 
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
)




#
#
 
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




*
*
T
i
e
r
*
*
:
 
C
r
i
t
i
c
a
l
 
(
R
P
O
:
 
1
5
 
m
i
n
,
 
R
T
O
:
 
3
0
 
m
i
n
)




*
*
B
a
c
k
u
p
 
S
t
r
a
t
e
g
y
*
*
:


-
 
*
*
D
a
t
a
b
a
s
e
*
*
 
(
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
)
:
 
H
o
u
r
l
y
 
i
n
c
r
e
m
e
n
t
a
l
 
+
 
d
a
i
l
y
 
f
u
l
l
 
b
a
c
k
u
p
,
 
P
I
T
R
 
e
n
a
b
l
e
d


-
 
*
*
M
e
m
c
a
c
h
e
d
 
s
t
a
t
e
*
*
:
 
S
t
a
t
e
l
e
s
s
 
(
n
o
 
b
a
c
k
u
p
 
n
e
e
d
e
d
)


-
 
*
*
C
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
*
*
:
 
G
i
t
O
p
s
-
m
a
n
a
g
e
d


-
 
*
*
M
a
i
l
 
d
a
t
a
*
*
:
 
B
a
c
k
e
d
 
u
p
 
v
i
a
 
D
o
v
e
c
o
t
-
P
o
s
t
f
i
x
 
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
 
(
s
e
e
 
d
o
v
e
c
o
t
-
p
o
s
t
f
i
x
 
s
p
e
c
)




*
*
R
e
c
o
v
e
r
y
 
O
r
d
e
r
*
*
:


1
.
 
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
 
d
a
t
a
b
a
s
e
 
r
e
s
t
o
r
e
 
-
 
1
0
 
m
i
n


2
.
 
S
O
G
o
 
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
 
5
 
m
i
n


3
.
 
A
p
a
c
h
e
 
+
 
P
H
P
-
F
P
M
 
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
 
-
 
3
 
m
i
n


4
.
 
O
I
D
C
 
c
l
i
e
n
t
 
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
 
-
 
2
 
m
i
n


5
.
 
L
D
A
P
 
b
i
n
d
 
t
e
s
t
 
-
 
2
 
m
i
n


6
.
 
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
 
c
o
n
n
e
c
t
i
o
n
 
t
e
s
t
 
-
 
3
 
m
i
n


7
.
 
M
e
m
c
a
c
h
e
d
 
c
o
n
n
e
c
t
i
o
n
 
t
e
s
t
 
-
 
2
 
m
i
n


8
.
 
S
m
o
k
e
 
t
e
s
t
s
 
(
l
o
g
i
n
,
 
s
e
n
d
 
e
m
a
i
l
,
 
c
a
l
e
n
d
a
r
 
s
y
n
c
)
 
-
 
3
 
m
i
n




*
*
C
r
i
t
i
c
a
l
 
D
a
t
a
*
*
:


-
 
U
s
e
r
 
p
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
n
d
 
c
a
l
e
n
d
a
r
 
e
n
t
r
i
e
s


-
 
A
d
d
r
e
s
s
 
b
o
o
k
 
c
o
n
t
a
c
t
s


-
 
E
m
a
i
l
 
f
i
l
t
e
r
s
 
(
S
i
e
v
e
 
s
c
r
i
p
t
s
)


-
 
S
e
s
s
i
o
n
 
d
a
t
a
 
(
M
e
m
c
a
c
h
e
d
)


-
 
O
I
D
C
 
c
l
i
e
n
t
 
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




*
*
F
a
i
l
u
r
e
 
S
c
e
n
a
r
i
o
s
*
*
:


-
 
*
*
D
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
*
*
:
 
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
 
P
I
T
R
,
 
v
e
r
i
f
y
 
u
s
e
r
 
d
a
t
a
 
i
n
t
e
g
r
i
t
y


-
 
*
*
A
p
a
c
h
e
 
f
a
i
l
u
r
e
*
*
:
 
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
 
a
u
t
o
-
r
e
s
t
a
r
t
,
 
v
e
r
i
f
y
 
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


-
 
*
*
C
o
m
p
l
e
t
e
 
f
a
i
l
u
r
e
*
*
:
 
R
e
d
e
p
l
o
y
 
f
r
o
m
 
G
i
t
O
p
s
,
 
r
e
s
t
o
r
e
 
D
B
,
 
v
e
r
i
f
y
 
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


-
 
*
*
O
I
D
C
 
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
a
t
i
o
n
*
*
:
 
R
e
-
r
e
g
i
s
t
e
r
 
c
l
i
e
n
t
 
i
n
 
K
e
y
c
l
o
a
k
,
 
v
e
r
i
f
y
 
S
S
O
 
f
l
o
w

