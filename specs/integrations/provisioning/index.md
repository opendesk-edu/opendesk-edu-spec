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
 
U
s
e
r
 
P
r
o
v
i
s
i
o
n
i
n
g




#
#
 
P
u
r
p
o
s
e




A
u
t
o
m
a
t
e
d
 
u
s
e
r
 
l
i
f
e
c
y
c
l
e
 
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
 
i
n
c
l
u
d
i
n
g
 
a
c
c
o
u
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
 
m
o
d
i
f
i
c
a
t
i
o
n
,


d
e
p
r
o
v
i
s
i
o
n
i
n
g
,
 
a
n
d
 
s
e
m
e
s
t
e
r
-
b
a
s
e
d
 
e
n
r
o
l
l
m
e
n
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
 
v
i
a
 
O
X
 
C
o
n
n
e
c
t
o
r
 
+
 
L
D
A
P


s
y
n
c
 
a
n
d
 
S
A
M
L
 
a
c
c
o
u
n
t
 
l
i
n
k
i
n
g
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
 
S
C
I
M
 
p
r
o
v
i
s
i
o
n
i
n
g
 
(
p
l
a
n
n
e
d
 
f
u
t
u
r
e
)


-
 
C
a
m
p
u
s
 
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
 
s
y
s
t
e
m
 
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
 
(
p
l
a
n
n
e
d
 
v
1
.
5
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
 
O
X
 
C
o
n
n
e
c
t
o
r
 
p
r
o
v
i
s
i
o
n
i
n
g
 
f
o
r
 
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




T
h
e
 
O
X
 
C
o
n
n
e
c
t
o
r
 
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
s
i
o
n
 
u
s
e
r
s
 
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
 
v
i
a
 
t
h
e
 
S
O
A
P


A
P
I
,
 
c
r
e
a
t
i
n
g
 
c
o
n
t
e
x
t
s
,
 
g
r
o
u
p
s
,
 
a
n
d
 
m
a
i
l
b
o
x
e
s
.




O
X
 
C
o
n
n
e
c
t
o
r
 
r
u
n
s
 
a
s
 
a
 
C
r
o
n
J
o
b
 
t
r
i
g
g
e
r
e
d
 
b
y
 
L
D
A
P
 
c
h
a
n
g
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
 
N
e
w
 
u
s
e
r
 
a
u
t
o
-
p
r
o
v
i
s
i
o
n
e
d
 
t
o
 
O
X


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
 
u
s
e
r
 
`
a
l
i
c
e
`
 
c
r
e
a
t
e
d
 
i
n
 
O
p
e
n
L
D
A
P
 
w
i
t
h
 
m
a
i
l
 
`
a
l
i
c
e
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
d
e
`


-
 
W
H
E
N
 
t
h
e
 
O
X
 
C
o
n
n
e
c
t
o
r
 
C
r
o
n
J
o
b
 
e
x
e
c
u
t
e
s
 
(
t
r
i
g
g
e
r
e
d
 
b
y
 
L
D
A
P
 
c
h
a
n
g
e
 
d
e
t
e
c
t
i
o
n
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
X
 
C
o
n
n
e
c
t
o
r
 
c
a
l
l
s
 
t
h
e
 
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
A
P
 
A
P
I


-
 
A
N
D
 
c
r
e
a
t
e
s
 
a
 
u
s
e
r
 
c
o
n
t
e
x
t
 
f
o
r
 
a
l
i
c
e


-
 
A
N
D
 
c
r
e
a
t
e
s
 
a
 
m
a
i
l
b
o
x
 
w
i
t
h
 
I
M
A
P
/
S
M
T
P
 
a
c
c
e
s
s


-
 
A
N
D
 
a
l
i
c
e
 
c
a
n
 
i
m
m
e
d
i
a
t
e
l
y
 
a
c
c
e
s
s
 
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
,
 
a
n
d
 
c
o
n
t
a
c
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
 
G
r
o
u
p
 
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
a
g
a
t
e
d


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
 
a
d
d
e
d
 
t
o
 
t
h
e
 
`
o
x
-
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
-
u
s
e
r
s
`
 
L
D
A
P
 
g
r
o
u
p


-
 
W
H
E
N
 
t
h
e
 
O
X
 
C
o
n
n
e
c
t
o
r
 
p
r
o
c
e
s
s
e
s
 
t
h
e
 
c
h
a
n
g
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
d
d
e
d
 
t
o
 
t
h
e
 
c
o
r
r
e
s
p
o
n
d
i
n
g
 
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
 
g
r
o
u
p


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
 
g
a
i
n
s
 
a
c
c
e
s
s
 
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
 
(
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
 
a
p
p
e
a
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
 
E
m
a
i
l
 
a
d
d
r
e
s
s
 
c
h
a
n
g
e
 
s
y
n
c
e
d


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
i
s
t
i
n
g
 
u
s
e
r
 
w
h
o
s
e
 
e
m
a
i
l
 
a
d
d
r
e
s
s
 
c
h
a
n
g
e
s
 
i
n
 
O
p
e
n
L
D
A
P


-
 
W
H
E
N
 
t
h
e
 
O
X
 
C
o
n
n
e
c
t
o
r
 
p
r
o
c
e
s
s
e
s
 
t
h
e
 
c
h
a
n
g
e


-
 
T
H
E
N
 
t
h
e
 
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
 
a
c
c
o
u
n
t
 
e
m
a
i
l
 
i
s
 
u
p
d
a
t
e
d
 
v
i
a
 
S
O
A
P
 
A
P
I


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
 
c
a
n
 
s
t
i
l
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
e
 
w
i
t
h
 
t
h
e
 
n
e
w
 
e
m
a
i
l




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
w
o
-
p
h
a
s
e
 
d
e
p
r
o
v
i
s
i
o
n
i
n
g




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
 
b
e
 
d
e
p
r
o
v
i
s
i
o
n
e
d
 
i
n
 
t
w
o
 
p
h
a
s
e
s
:
 
d
i
s
a
b
l
e
 
w
i
t
h
 
g
r
a
c
e
 
p
e
r
i
o
d
,


t
h
e
n
 
p
e
r
m
a
n
e
n
t
 
d
e
l
e
t
i
o
n
 
a
f
t
e
r
 
6
 
m
o
n
t
h
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
c
c
o
u
n
t
 
d
i
s
a
b
l
e
d
 
o
n
 
e
x
m
a
t
r
i
c
u
l
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
h
o
 
l
e
a
v
e
s
 
t
h
e
 
u
n
i
v
e
r
s
i
t
y
 
(
e
x
m
a
t
r
i
c
u
l
a
t
i
o
n
)


-
 
W
H
E
N
 
t
h
e
 
d
e
p
r
o
v
i
s
i
o
n
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
 
i
s
 
t
r
i
g
g
e
r
e
d
 
(
v
i
a
 
H
I
S
i
n
O
n
e
 
w
e
b
h
o
o
k
 
o
r
 
m
a
n
u
a
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
 
u
s
e
r
'
s
 
O
p
e
n
L
D
A
P
 
a
c
c
o
u
n
t
 
i
s
 
S
P
E
C
I
A
L
 
(
m
a
r
k
e
d
 
a
s
 
d
i
s
a
b
l
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
 
u
s
e
r
'
s
 
`
s
h
a
d
o
w
E
x
p
i
r
e
`
 
o
r
 
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
 
a
c
c
o
u
n
t
 
i
s
 
s
e
t
 
t
o
 
d
i
s
a
b
l
e
d
 
s
t
a
t
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
 
c
a
n
n
o
t
 
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
 
d
a
t
a
 
i
s
 
p
r
e
s
e
r
v
e
d
 
f
o
r
 
6
 
m
o
n
t
h
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
 
A
c
c
o
u
n
t
 
p
e
r
m
a
n
e
n
t
l
y
 
d
e
l
e
t
e
d
 
a
f
t
e
r
 
g
r
a
c
e
 
p
e
r
i
o
d


-
 
G
I
V
E
N
 
a
 
d
i
s
a
b
l
e
d
 
u
s
e
r
 
w
h
o
s
e
 
6
-
m
o
n
t
h
 
g
r
a
c
e
 
p
e
r
i
o
d
 
h
a
s
 
e
x
p
i
r
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
 
c
l
e
a
n
u
p
 
C
r
o
n
J
o
b
 
r
u
n
s
 
(
d
a
i
l
y
)


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
'
s
 
L
D
A
P
 
e
n
t
r
y
 
i
s
 
r
e
m
o
v
e
d


-
 
A
N
D
 
t
h
e
 
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
 
a
c
c
o
u
n
t
 
i
s
 
p
e
r
m
a
n
e
n
t
l
y
 
d
e
l
e
t
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
 
f
r
o
m
 
s
e
c
o
n
d
a
r
y
 
s
e
r
v
i
c
e
s
 
(
N
e
x
t
c
l
o
u
d
,
 
I
L
I
A
S
,
 
M
o
o
d
l
e
)
 
i
s
 
a
r
c
h
i
v
e
d
 
o
r
 
d
e
l
e
t
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
 
S
A
M
L
 
a
c
c
o
u
n
t
 
l
i
n
k
i
n
g
 
f
o
r
 
f
e
d
e
r
a
t
e
d
 
u
s
e
r
s




F
e
d
e
r
a
t
e
d
 
u
s
e
r
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
 
D
F
N
-
A
A
I
/
e
d
u
G
A
I
N
 
S
H
A
L
L
 
h
a
v
e
 
t
h
e
i
r
 
S
A
M
L
 
i
d
e
n
t
i
t
y


l
i
n
k
e
d
 
t
o
 
a
 
l
o
c
a
l
 
K
e
y
c
l
o
a
k
 
a
c
c
o
u
n
t
 
v
i
a
 
t
h
e
 
K
e
y
c
l
o
a
k
 
a
d
m
i
n
 
A
P
I
'
s


`
f
e
d
e
r
a
t
e
d
-
i
d
e
n
t
i
t
y
`
 
e
n
d
p
o
i
n
t
s
.




`
e
d
u
P
e
r
s
o
n
P
r
i
n
c
i
p
a
l
N
a
m
e
`
 
i
s
 
u
s
e
d
 
a
s
 
t
h
e
 
s
t
a
b
l
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
 
F
e
d
e
r
a
t
e
d
 
u
s
e
r
 
f
i
r
s
t
 
l
o
g
i
n


-
 
G
I
V
E
N
 
a
 
f
e
d
e
r
a
t
e
d
 
u
s
e
r
 
f
r
o
m
 
E
T
H
 
Z
u
r
i
c
h
 
w
i
t
h
 
`
e
d
u
P
e
r
s
o
n
P
r
i
n
c
i
p
a
l
N
a
m
e
:
 
b
o
b
@
e
t
h
z
.
c
h
`


-
 
W
H
E
N
 
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
 
I
d
P
 
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
 
t
h
e
 
u
s
e
r
 
a
n
d
 
f
o
r
w
a
r
d
s
 
t
h
e
 
S
A
M
L
 
a
s
s
e
r
t
i
o
n
 
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
 
c
a
l
l
s
 
`
P
U
T
 
/
a
d
m
i
n
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
u
s
e
r
s
/
{
u
s
e
r
I
d
}
/
f
e
d
e
r
a
t
e
d
-
i
d
e
n
t
i
t
y
/
s
h
i
b
b
o
l
e
t
h
`


-
 
A
N
D
 
t
h
e
 
S
A
M
L
 
i
d
e
n
t
i
t
y
 
i
s
 
l
i
n
k
e
d
 
t
o
 
a
 
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
 
w
i
t
h
 
`
u
s
e
r
n
a
m
e
:
 
b
o
b
@
e
t
h
z
.
c
h
`


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
 
i
s
 
a
d
d
e
d
 
t
o
 
t
h
e
 
`
m
a
n
a
g
e
d
-
b
y
-
a
t
t
r
i
b
u
t
e
-
f
e
d
e
r
a
t
e
d
-
u
s
e
r
s
`
 
g
r
o
u
p


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
 
g
a
i
n
s
 
a
c
c
e
s
s
 
t
o
 
p
l
a
t
f
o
r
m
 
s
e
r
v
i
c
e
s
 
o
n
 
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
 
l
o
g
i
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
 
F
e
d
e
r
a
t
e
d
 
u
s
e
r
 
L
o
g
i
n
 
p
r
e
s
e
r
v
e
s
 
N
a
m
e
I
D


-
 
G
I
V
E
N
 
a
 
f
e
d
e
r
a
t
e
d
 
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
x
i
s
t
i
n
g
 
K
e
y
c
l
o
a
k
 
l
i
n
k
e
d
 
a
c
c
o
u
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
 
u
s
e
r
 
l
o
g
s
 
i
n
 
a
g
a
i
n
 
v
i
a
 
f
e
d
e
r
a
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
 
S
A
M
L
 
`
N
a
m
e
I
D
`
 
(
p
e
r
s
i
s
t
e
n
t
)
 
i
s
 
v
a
l
i
d
a
t
e
d


-
 
A
N
D
 
t
h
e
 
s
a
m
e
 
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
 
(
n
o
 
d
u
p
l
i
c
a
t
e
 
a
c
c
o
u
n
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
 
S
e
m
e
s
t
e
r
-
b
a
s
e
d
 
c
o
u
r
s
e
 
p
r
o
v
i
s
i
o
n
i
n
g




T
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
 
a
u
t
o
m
a
t
e
d
 
c
o
u
r
s
e
 
c
r
e
a
t
i
o
n
 
a
n
d
 
a
r
c
h
i
v
a
l
 
a
l
i
g
n
e
d
 
w
i
t
h


u
n
i
v
e
r
s
i
t
y
 
s
e
m
e
s
t
e
r
 
c
y
c
l
e
s
 
(
S
S
 
2
0
2
6
,
 
W
S
 
2
0
2
6
/
2
0
2
7
,
 
e
t
c
.
)
.




T
h
i
s
 
i
s
 
p
r
i
m
a
r
i
l
y
 
f
o
r
 
I
L
I
A
S
 
a
n
d
 
M
o
o
d
l
e
;
 
m
a
n
u
a
l
 
i
n
t
e
r
v
e
n
t
i
o
n
s
 
a
r
e
 
a
c
c
e
p
t
a
b
l
e
 
f
o
r


n
o
n
-
a
u
t
o
m
a
t
e
d
 
o
b
s
e
r
v
a
b
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
 
S
e
m
e
s
t
e
r
 
s
t
a
r
t
 
c
o
u
r
s
e
 
c
r
e
a
t
i
o
n
 
(
p
l
a
n
n
e
d
)


-
 
G
I
V
E
N
 
t
h
e
 
s
t
a
r
t
 
o
f
 
a
 
n
e
w
 
s
e
m
e
s
t
e
r
 
(
e
.
g
.
,
 
W
S
 
2
0
2
6
/
2
0
2
7
)


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
m
e
s
t
e
r
 
p
r
o
v
i
s
i
o
n
i
n
g
 
s
c
r
i
p
t
 
r
u
n
s
 
(
m
a
n
u
a
l
 
o
r
 
s
c
h
e
d
u
l
e
d
)


-
 
T
H
E
N
 
c
o
u
r
s
e
s
 
a
r
e
 
c
r
e
a
t
e
d
 
i
n
 
I
L
I
A
S
 
w
i
t
h
 
c
o
r
r
e
c
t
 
s
e
m
e
s
t
e
r
 
m
e
t
a
d
a
t
a
 
i
n
 
c
o
u
r
s
e
 
t
i
t
l
e


-
 
A
N
D
 
c
o
u
r
s
e
s
 
a
r
e
 
c
r
e
a
t
e
d
 
i
n
 
M
o
o
d
l
e
 
w
i
t
h
 
c
o
r
r
e
c
t
 
s
e
m
e
s
t
e
r
 
c
a
t
e
g
o
r
i
e
s


-
 
A
N
D
 
e
n
r
o
l
l
e
d
 
s
t
u
d
e
n
t
s
 
a
r
e
 
a
d
d
e
d
 
t
o
 
c
o
u
r
s
e
 
r
o
s
t
e
r
s
 
b
a
s
e
d
 
o
n
 
t
h
e
 
p
r
e
v
i
o
u
s
 
s
e
m
e
s
t
e
r




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
m
e
s
t
e
r
 
e
n
d
 
a
r
c
h
i
v
a
l


-
 
G
I
V
E
N
 
t
h
e
 
e
n
d
 
o
f
 
a
 
s
e
m
e
s
t
e
r
 
(
e
.
g
.
,
 
S
S
 
2
0
2
6
)


-
 
W
H
E
N
 
t
h
e
 
a
r
c
h
i
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
 
r
u
n
s


-
 
T
H
E
N
 
c
o
u
r
s
e
 
c
o
n
t
e
n
t
 
i
s
 
f
r
o
z
e
n
 
i
n
 
I
L
I
A
S


-
 
A
N
D
 
c
o
u
r
s
e
 
m
o
d
e
 
i
n
 
M
o
o
d
l
e
 
i
s
 
s
e
t
 
t
o
 
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
 
A
N
D
 
a
c
c
e
s
s
 
i
s
 
r
e
s
t
r
i
c
t
e
d
 
t
o
 
s
t
u
d
e
n
t
s
 
w
h
o
 
w
e
r
e
 
e
n
r
o
l
l
e
d
 
d
u
r
i
n
g
 
t
h
e
 
s
e
m
e
s
t
e
r




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
 
E
n
r
o
l
l
m
e
n
t
 
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
 
(
f
u
t
u
r
e
)




T
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
 
S
H
A
L
L
 
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
 
s
t
u
d
e
n
t
 
e
n
r
o
l
l
m
e
n
t
s
 
f
r
o
m
 
t
h
e
 
c
a
m
p
u
s
 
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


s
y
s
t
e
m
 
(
H
I
S
i
n
O
n
e
 
o
r
 
s
i
m
i
l
a
r
)
 
t
o
 
L
M
S
 
c
o
u
r
s
e
 
r
o
s
t
e
r
s
.




T
h
i
s
 
r
e
q
u
i
r
e
s
 
a
 
C
M
S
 
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
 
a
d
a
p
t
e
r
;
 
c
u
r
r
e
n
t
l
y
 
m
a
n
u
a
l
 
e
n
r
o
l
l
m
e
n
t
 
i
s
 
a
c
c
e
p
t
a
b
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
 
S
t
u
d
e
n
t
 
e
n
r
o
l
l
s
 
v
i
a
 
c
a
m
p
u
s
 
s
y
s
t
e
m
 
(
p
l
a
n
n
e
d
)


-
 
G
I
V
E
N
 
a
 
s
t
u
d
e
n
t
 
e
n
r
o
l
l
e
d
 
i
n
 
a
 
c
o
u
r
s
e
 
i
n
 
H
I
S
i
n
O
n
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
r
o
l
l
m
e
n
t
 
w
e
b
h
o
o
k
 
f
i
r
e
s
 
t
o
 
t
h
e
 
p
r
o
v
i
s
i
o
n
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


-
 
T
H
E
N
 
t
h
e
 
s
t
u
d
e
n
t
'
s
 
O
p
e
n
L
D
A
P
 
e
n
t
r
y
 
i
s
 
u
p
d
a
t
e
d
 
w
i
t
h
 
t
h
e
 
c
o
u
r
s
e
 
g
r
o
u
p
 
m
e
m
b
e
r
s
h
i
p


-
 
A
N
D
 
I
L
I
A
S
/
M
o
o
d
l
e
 
a
r
e
 
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
 
t
o
 
s
y
n
c
 
g
r
o
u
p
 
m
e
m
b
e
r
s
h
i
p
s


-
 
A
N
D
 
t
h
e
 
s
t
u
d
e
n
t
 
i
s
 
a
d
d
e
d
 
t
o
 
t
h
e
 
c
o
r
r
e
s
p
o
n
d
i
n
g
 
I
L
I
A
S
/
M
o
o
d
l
e
 
c
o
u
r
s
e




#
#
 
O
X
 
C
o
n
n
e
c
t
o
r
 
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
 
D
e
t
a
i
l
s




#
#
#
 
O
X
 
C
o
n
n
e
c
t
o
r
 
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
 
|
 
C
r
o
n
J
o
b
 
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
`
 
n
a
m
e
s
p
a
c
e
 
|


|
 
S
c
h
e
d
u
l
e
 
|
 
H
o
u
r
l
y
 
(
a
d
j
u
s
t
a
b
l
e
 
v
i
a
 
`
e
n
v
V
a
r
s
`
)
 
|


|
 
I
m
a
g
e
 
|
 
`
r
e
g
i
s
t
r
y
.
o
p
e
n
c
o
d
e
.
d
e
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
o
x
-
c
o
n
n
e
c
t
o
r
`
 
|


|
 
C
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
s
e
c
r
e
t
s
.
o
x
_
a
p
p
s
u
i
t
e
.
{
a
d
m
i
n
U
s
e
r
,
 
a
d
m
i
n
P
a
s
s
w
o
r
d
}
`
 
|




#
#
#
 
O
X
 
C
o
n
n
e
c
t
o
r
 
S
O
A
P
 
A
P
I
 
E
n
d
p
o
i
n
t
s




T
h
e
 
O
X
 
C
o
n
n
e
c
t
o
r
 
u
s
e
s
 
t
h
e
 
f
o
l
l
o
w
i
n
g
 
S
O
A
P
 
e
n
d
p
o
i
n
t
s
:




|
 
O
p
e
r
a
t
i
o
n
 
|
 
E
n
d
p
o
i
n
t
 
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
 
C
r
e
a
t
e
 
C
o
n
t
e
x
t
 
|
 
`
/
s
o
a
p
/
u
s
e
r
?
n
a
m
e
=
c
r
e
a
t
e
C
o
n
t
e
x
t
`
 
|
 
C
r
e
a
t
e
 
u
s
e
r
 
c
o
n
t
e
x
t
 
|


|
 
C
r
e
a
t
e
 
U
s
e
r
 
|
 
`
/
s
o
a
p
/
u
s
e
r
?
n
a
m
e
=
c
r
e
a
t
e
U
s
e
r
`
 
|
 
C
r
e
a
t
e
 
m
a
i
l
b
o
x
 
|


|
 
U
p
d
a
t
e
 
U
s
e
r
 
|
 
`
/
s
o
a
p
/
u
s
e
r
?
n
a
m
e
=
u
p
d
a
t
e
U
s
e
r
`
 
|
 
S
y
n
c
 
p
r
o
p
e
r
t
i
e
s
 
|


|
 
D
e
l
e
t
e
 
U
s
e
r
 
|
 
`
/
s
o
a
p
/
u
s
e
r
?
n
a
m
e
=
d
e
l
e
t
e
U
s
e
r
`
 
|
 
D
e
p
r
o
v
i
s
i
o
n
 
|




#
#
#
 
L
D
A
P
 
F
i
l
t
e
r
 
f
o
r
 
O
X
 
S
y
n
c




O
X
 
C
o
n
n
e
c
t
o
r
 
q
u
e
r
i
e
s
 
O
p
e
n
L
D
A
P
 
w
i
t
h
 
f
i
l
t
e
r
:


`
`
`


(
&
(
o
b
j
e
c
t
C
l
a
s
s
=
i
n
e
t
O
r
g
P
e
r
s
o
n
)
(
m
a
i
l
=
*
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
d
e
)
(
m
e
m
b
e
r
O
f
=
c
n
=
o
x
-
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
-
u
s
e
r
s
,
c
n
=
g
r
o
u
p
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
o
p
e
n
d
e
s
k
-
h
r
z
,
d
c
=
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
,
d
c
=
d
e
)
)


`
`
`




#
#
 
H
I
S
i
n
O
n
e
 
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
 
(
F
u
t
u
r
e
)




#
#
#
 
H
I
S
i
n
O
n
e
 
W
e
b
h
o
o
k
 
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




T
o
 
e
n
a
b
l
e
 
e
n
r
o
l
l
m
e
n
t
 
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
,
 
H
I
S
i
n
O
n
e
 
s
h
a
l
l
 
b
e
 
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
 
t
o
 
f
i
r
e
 
w
e
b
h
o
o
k
s


t
o
 
t
h
e
 
p
r
o
v
i
s
i
o
n
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
:




|
 
E
v
e
n
t
 
|
 
W
e
b
h
o
o
k
 
U
R
L
 
|
 
P
a
y
l
o
a
d
 
|


|
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
t
u
d
e
n
t
 
e
n
r
o
l
l
m
e
n
t
 
c
r
e
a
t
e
d
 
|
 
`
h
t
t
p
s
:
/
/
p
r
o
v
i
s
i
o
n
i
n
g
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
w
e
b
h
o
o
k
s
/
h
i
s
i
n
o
n
e
/
e
n
r
o
l
l
m
e
n
t
`
 
|
 
`
{
s
t
u
d
e
n
t
I
d
,
 
c
o
u
r
s
e
I
d
,
 
s
e
m
e
s
t
e
r
}
`
 
|


|
 
S
t
u
d
e
n
t
 
e
n
r
o
l
l
m
e
n
t
 
r
e
m
o
v
e
d
 
|
 
`
h
t
t
p
s
:
/
/
p
r
o
v
i
s
i
o
n
i
n
g
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
w
e
b
h
o
o
k
s
/
h
i
s
i
n
o
n
e
/
u
n
e
n
r
o
l
l
`
 
|
 
`
{
s
t
u
d
e
n
t
I
d
,
 
c
o
u
r
s
e
I
d
}
`
 
|




#
#
#
 
P
r
o
v
i
s
i
o
n
i
n
g
 
S
e
r
v
i
c
e
 
(
T
o
 
B
e
 
I
m
p
l
e
m
e
n
t
e
d
)




A
 
l
i
g
h
t
w
e
i
g
h
t
 
p
r
o
v
i
s
i
o
n
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
 
t
o
 
r
e
c
e
i
v
e
 
H
I
S
i
n
O
n
e
 
w
e
b
h
o
o
k
s
 
a
n
d
 
u
p
d
a
t
e
 
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
 
w
i
t
h
 
c
o
u
r
s
e
 
g
r
o
u
p
 
m
e
m
b
e
r
s
h
i
p
s
.




#
#
 
K
n
o
w
n
 
L
i
m
i
t
a
t
i
o
n
s




-
 
M
a
n
u
a
l
 
c
o
u
r
s
e
 
c
r
e
a
t
i
o
n
:
 
I
L
I
A
S
 
a
n
d
 
M
o
o
d
l
e
 
c
o
u
r
s
e
s
 
a
r
e
 
c
u
r
r
e
n
t
l
y
 
c
r
e
a
t
e
d


 
 
m
a
n
u
a
l
l
y
;
 
a
u
t
o
m
a
t
e
d
 
s
e
m
e
s
t
e
r
 
c
o
u
r
s
e
 
p
r
o
v
i
s
i
o
n
i
n
g
 
i
s
 
p
l
a
n
n
e
d
.


-
 
C
M
S
 
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
:
 
H
I
S
i
n
O
n
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
 
i
s
 
n
o
t
 
y
e
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
e
d
;
 
e
n
r
o
l
l
m
e
n
t
s


 
 
a
r
e
 
m
a
n
u
a
l
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
u
s
e
r
 
+
 
g
r
o
u
p
 
d
i
r
e
c
t
o
r
y
)


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
 
(
S
O
A
P
 
A
P
I
 
e
n
d
p
o
i
n
t
)


-
 
O
X
 
C
o
n
n
e
c
t
o
r
 
(
p
r
o
v
i
s
i
o
n
i
n
g
 
c
r
o
n
j
o
b
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
 
(
f
e
d
e
r
a
t
e
d
 
a
c
c
o
u
n
t
 
l
i
n
k
i
n
g
)


-
 
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
 
I
d
P
 
(
f
e
d
e
r
a
t
i
o
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
i
o
n
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




-
 
[
F
i
l
e
 
S
t
o
r
e
]
(
.
.
/
f
i
l
e
-
s
t
o
r
e
)
 
(
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
)


-
 
[
I
n
t
e
r
c
o
m
]
(
.
.
/
i
n
t
e
r
c
o
m
)
 
(
s
i
l
e
n
t
 
l
o
g
i
n
)


-
 
[
L
D
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
a
u
t
h
/
l
d
a
p
/
)
 
(
g
r
o
u
p
 
s
y
n
c
 
f
r
o
m
 
O
S
S
)


-
 
`
.
.
/
_
r
e
g
i
s
t
r
y
/
i
n
t
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
o
n
-
m
a
t
r
i
x
/
`
 
(
L
D
A
P
 
S
Y
N
C
 
r
e
l
a
t
i
o
n
s
h
i
p
s
)

