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
 
I
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
 
R
e
f
e
r
e
n
c
e




M
a
p
s
 
s
p
e
c
 
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
 
t
o
 
t
h
e
 
H
e
l
m
 
c
h
a
r
t
s
,
 
t
e
m
p
l
a
t
e
s
,
 
a
n
d
 
v
a
l
u
e
s
 
f
i
l
e
s
 
t
h
a
t


i
m
p
l
e
m
e
n
t
 
t
h
e
m
.
 
S
e
r
v
i
c
e
s
 
w
i
t
h
o
u
t
 
a
 
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
 
u
s
e
 
t
h
e
 
u
p
s
t
r
e
a
m
 
o
p
e
n
D
e
s
k
 
c
h
a
r
t
.




#
#
 
L
o
c
a
l
 
C
h
a
r
t
s
 
(
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
)




|
 
S
e
r
v
i
c
e
 
|
 
C
h
a
r
t
 
P
a
t
h
 
|
 
K
e
y
 
T
e
m
p
l
a
t
e
s
 
|
 
V
a
l
u
e
s
 
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


|
 
I
L
I
A
S
 
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
i
l
i
a
s
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
`
p
v
c
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
b
a
c
k
u
p
-
c
r
o
n
j
o
b
.
y
a
m
l
`
,
 
`
s
s
o
-
c
o
n
f
i
g
m
a
p
.
y
a
m
l
`
 
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
a
p
p
s
/
i
l
i
a
s
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
 
M
o
o
d
l
e
 
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
m
o
o
d
l
e
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
`
p
v
c
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
i
n
g
r
e
s
s
.
y
a
m
l
`
 
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
a
p
p
s
/
m
o
o
d
l
e
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
b
i
g
b
l
u
e
b
u
t
t
o
n
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
`
p
v
c
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
r
e
d
i
s
-
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
.
y
a
m
l
`
 
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
a
p
p
s
/
b
i
g
b
l
u
e
b
u
t
t
o
n
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
 
E
t
h
e
r
p
a
d
 
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
e
t
h
e
r
p
a
d
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
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
-
s
t
a
t
e
f
u
l
s
e
t
.
y
a
m
l
`
,
 
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
-
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
 
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
a
p
p
s
/
e
t
h
e
r
p
a
d
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
 
B
o
o
k
S
t
a
c
k
 
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
b
o
o
k
s
t
a
c
k
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
`
p
v
c
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
i
n
g
r
e
s
s
.
y
a
m
l
`
 
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
a
p
p
s
/
b
o
o
k
s
t
a
c
k
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
 
P
l
a
n
k
a
 
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
p
l
a
n
k
a
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
`
p
v
c
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
i
n
g
r
e
s
s
.
y
a
m
l
`
 
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
a
p
p
s
/
p
l
a
n
k
a
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
 
Z
a
m
m
a
d
 
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
z
a
m
m
a
d
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
`
p
v
c
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
i
n
g
r
e
s
s
.
y
a
m
l
`
 
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
a
p
p
s
/
z
a
m
m
a
d
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
 
L
i
m
e
S
u
r
v
e
y
 
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
l
i
m
e
s
u
r
v
e
y
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
`
p
v
c
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
i
n
g
r
e
s
s
.
y
a
m
l
`
 
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
a
p
p
s
/
l
i
m
e
s
u
r
v
e
y
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
 
D
r
a
w
.
i
o
 
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
d
r
a
w
i
o
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
i
n
g
r
e
s
s
.
y
a
m
l
`
 
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
a
p
p
s
/
d
r
a
w
i
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
 
E
x
c
a
l
i
d
r
a
w
 
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
e
x
c
a
l
i
d
r
a
w
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
i
n
g
r
e
s
s
.
y
a
m
l
`
 
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
a
p
p
s
/
e
x
c
a
l
i
d
r
a
w
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
 
S
e
l
f
-
S
e
r
v
i
c
e
 
P
a
s
s
w
o
r
d
 
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
e
l
f
-
s
e
r
v
i
c
e
-
p
a
s
s
w
o
r
d
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
i
n
g
r
e
s
s
.
y
a
m
l
`
 
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
a
p
p
s
/
s
e
l
f
-
s
e
r
v
i
c
e
-
p
a
s
s
w
o
r
d
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
 
T
Y
P
O
3
 
C
M
S
 
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
t
y
p
o
3
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
`
p
v
c
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
i
n
g
r
e
s
s
.
y
a
m
l
`
 
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
a
p
p
s
/
t
y
p
o
3
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
 
S
O
G
o
 
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
 
|
 
`
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
.
y
a
m
l
`
,
 
`
p
v
c
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
i
n
g
r
e
s
s
.
y
a
m
l
`
,
 
`
c
o
n
f
i
g
m
a
p
.
y
a
m
l
`
 
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
 
O
p
e
n
C
l
o
u
d
 
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
o
p
e
n
c
l
o
u
d
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
`
p
v
c
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
i
n
g
r
e
s
s
.
y
a
m
l
`
 
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
a
p
p
s
/
o
p
e
n
c
l
o
u
d
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
 
G
r
o
m
m
u
n
i
o
 
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
g
r
o
m
m
u
n
i
o
/
`
 
|
 
`
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
.
y
a
m
l
`
,
 
`
p
v
c
.
y
a
m
l
`
,
 
`
s
e
r
v
i
c
e
.
y
a
m
l
`
,
 
`
i
n
g
r
e
s
s
.
y
a
m
l
`
 
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
a
p
p
s
/
g
r
o
m
m
u
n
i
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




#
#
 
U
p
s
t
r
e
a
m
 
C
h
a
r
t
s
 
(
n
o
 
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
 
S
e
r
v
i
c
e
 
|
 
U
p
s
t
r
e
a
m
 
S
o
u
r
c
e
 
|
 
C
o
n
f
i
g
 
P
a
t
h
 
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
|


|
 
N
u
b
u
s
 
|
 
o
p
e
n
D
e
s
k
 
N
u
b
u
s
 
c
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
a
p
p
s
/
n
u
b
u
s
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
 
N
e
x
t
c
l
o
u
d
 
|
 
o
p
e
n
D
e
s
k
 
N
e
x
t
c
l
o
u
d
 
c
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
a
p
p
s
/
n
e
x
t
c
l
o
u
d
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
 
|
 
o
p
e
n
D
e
s
k
 
O
p
e
n
-
X
-
C
h
a
n
g
e
 
c
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
a
p
p
s
/
o
p
e
n
-
x
c
h
a
n
g
e
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
 
E
l
e
m
e
n
t
 
|
 
o
p
e
n
D
e
s
k
 
E
l
e
m
e
n
t
 
c
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
a
p
p
s
/
e
l
e
m
e
n
t
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
 
J
i
t
s
i
 
|
 
o
p
e
n
D
e
s
k
 
J
i
t
s
i
 
c
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
a
p
p
s
/
j
i
t
s
i
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
 
O
p
e
n
P
r
o
j
e
c
t
 
|
 
o
p
e
n
D
e
s
k
 
O
p
e
n
P
r
o
j
e
c
t
 
c
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
a
p
p
s
/
o
p
e
n
p
r
o
j
e
c
t
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
 
X
W
i
k
i
 
|
 
o
p
e
n
D
e
s
k
 
X
W
i
k
i
 
c
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
a
p
p
s
/
x
w
i
k
i
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
o
l
l
a
b
o
r
a
 
|
 
o
p
e
n
D
e
s
k
 
C
o
l
l
a
b
o
r
a
 
c
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
a
p
p
s
/
c
o
l
l
a
b
o
r
a
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
r
y
p
t
P
a
d
 
|
 
o
p
e
n
D
e
s
k
 
C
r
y
p
t
P
a
d
 
c
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
a
p
p
s
/
c
r
y
p
t
p
a
d
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
 
N
o
t
e
s
 
|
 
o
p
e
n
D
e
s
k
 
N
o
t
e
s
 
c
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
a
p
p
s
/
n
o
t
e
s
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




#
#
 
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
 
C
h
a
r
t
s




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
 
C
h
a
r
t
 
P
a
t
h
 
|
 
P
u
r
p
o
s
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
|


|
 
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
i
e
s
 
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
n
e
t
w
o
r
k
-
p
o
l
i
c
i
e
s
/
`
 
|
 
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
 
r
e
s
o
u
r
c
e
s
 
|


|
 
G
r
a
f
a
n
a
 
D
a
s
h
b
o
a
r
d
s
 
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
g
r
a
f
a
n
a
-
d
a
s
h
b
o
a
r
d
s
/
`
 
|
 
P
r
e
-
b
u
i
l
t
 
G
r
a
f
a
n
a
 
d
a
s
h
b
o
a
r
d
s
 
|


|
 
A
l
e
r
t
m
a
n
a
g
e
r
 
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
a
l
e
r
t
m
a
n
a
g
e
r
/
`
 
|
 
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
 
A
l
e
r
t
m
a
n
a
g
e
r
 
c
o
n
f
i
g
 
|


|
 
P
r
o
m
t
a
i
l
 
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
p
r
o
m
t
a
i
l
/
`
 
|
 
L
o
g
 
c
o
l
l
e
c
t
i
o
n
 
a
g
e
n
t
 
|


|
 
L
o
k
i
 
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
l
o
k
i
/
`
 
|
 
L
o
g
 
a
g
g
r
e
g
a
t
i
o
n
 
b
a
c
k
e
n
d
 
|


|
 
S
n
i
p
r
 
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
n
i
p
r
/
`
 
|
 
D
N
S
 
r
e
c
o
r
d
 
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
 
|


|
 
F
1
3
 
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
f
1
3
/
`
 
|
 
F
e
a
t
u
r
e
 
f
l
a
g
 
s
e
r
v
i
c
e
 
|




#
#
 
P
l
a
t
f
o
r
m
 
T
e
m
p
l
a
t
e
s




|
 
C
o
n
c
e
r
n
 
|
 
C
o
n
f
i
g
 
P
a
t
h
 
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
-
-
-
-
-
-
|


|
 
G
l
o
b
a
l
 
v
a
l
u
e
s
 
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
g
l
o
b
a
l
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
 
D
a
t
a
b
a
s
e
 
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
 
O
b
j
e
c
t
 
s
t
o
r
a
g
e
 
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
o
b
j
e
c
t
s
t
o
r
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
 
I
n
g
r
e
s
s
 
c
o
n
f
i
g
 
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
i
n
g
r
e
s
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
 
R
o
o
t
 
h
e
l
m
f
i
l
e
 
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

