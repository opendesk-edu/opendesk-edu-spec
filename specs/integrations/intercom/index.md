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




#
#
 
P
u
r
p
o
s
e




B
a
c
k
e
n
d
-
f
o
r
-
F
r
o
n
t
e
n
d
 
s
e
r
v
i
c
e
 
e
n
a
b
l
i
n
g
 
c
r
o
s
s
-
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
 
v
i
a


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
,
 
t
o
k
e
n
 
e
x
c
h
a
n
g
e
,
 
a
n
d
 
c
e
n
t
r
a
l
i
z
e
d
 
A
P
I
 
a
c
c
e
s
s
 
f
o
r
 
f
i
l
e
p
i
c
k
e
r
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
,
 
a
n
d
 
n
e
w
s
f
e
e
d
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
i
r
e
c
t
 
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
 
t
o
 
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
 
A
P
I




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
 
S
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
 
f
o
r
 
c
r
o
s
s
-
a
p
p
 
a
u
t
h




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
 
S
H
A
L
L
 
u
s
e
 
t
h
e
 
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
 
t
o
 
o
b
t
a
i
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
 
t
o
k
e
n
s
 
f
o
r


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
 
w
i
t
h
o
u
t
 
r
e
q
u
i
r
i
n
g
 
t
h
e
 
u
s
e
r
 
t
o
 
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
e
s
s
e
s
 
N
e
x
t
c
l
o
u
d
 
F
i
l
e
p
i
c
k
e
r


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
 
i
n
 
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
 
i
n
v
o
k
e
s
 
t
h
e
 
F
i
l
e
p
i
c
k
e
r
 
t
o
 
s
e
l
e
c
t
 
a
 
N
e
x
t
c
l
o
u
d
 
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
 
p
e
r
f
o
r
m
s
 
a
 
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
 
v
i
a
 
i
f
r
a
m
e
 
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
 
A
N
D
 
r
e
t
u
r
n
s
 
a
 
v
a
l
i
d
 
N
e
x
t
c
l
o
u
d
 
O
I
D
C
 
t
o
k
e
n
 
o
n
 
b
e
h
a
l
f
 
o
f
 
t
h
e
 
u
s
e
r


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
 
N
O
T
 
p
r
o
m
p
t
e
d
 
t
o
 
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
e




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
l
e
m
e
n
t
 
a
c
c
e
s
s
e
s
 
c
e
n
t
r
a
l
 
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
 
i
n
 
E
l
e
m
e
n
t


-
 
W
H
E
N
 
E
l
e
m
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
 
d
a
t
a


-
 
T
H
E
N
 
t
h
e
 
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
 
f
e
t
c
h
e
s
 
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
 
f
r
o
m
 
t
h
e
 
P
o
r
t
a
l
 
A
P
I


-
 
A
N
D
 
r
e
t
u
r
n
s
 
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
u
t
h
o
r
i
z
e
d
 
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
 
t
i
l
e
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
 
C
e
n
t
r
a
l
 
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
 
A
P
I




T
h
e
 
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
 
S
H
A
L
L
 
p
r
o
x
y
 
t
h
e
 
P
o
r
t
a
l
'
s
 
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
 
e
n
d
p
o
i
n
t
 
f
o
r
 
f
r
o
n
t
e
n
d


s
e
r
v
i
c
e
s
 
t
h
a
t
 
c
a
n
n
o
t
 
c
a
l
l
 
t
h
e
 
p
o
r
t
a
l
 
d
i
r
e
c
t
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
 
r
e
q
u
e
s
t


-
 
G
I
V
E
N
 
a
 
f
r
o
n
t
e
n
d
 
s
e
r
v
i
c
e
 
c
a
l
l
i
n
g
 
`
/
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
`


-
 
W
H
E
N
 
t
h
e
 
r
e
q
u
e
s
t
 
i
n
c
l
u
d
e
s
 
a
 
s
h
a
r
e
d
 
s
e
c
r
e
t
 
a
n
d
 
u
s
e
r
n
a
m
e


-
 
T
H
E
N
 
t
h
e
 
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
 
q
u
e
r
i
e
s
 
t
h
e
 
P
o
r
t
a
l
'
s


 
 
 
 
 
 
`
/
u
n
i
v
e
n
t
i
o
n
/
p
o
r
t
a
l
/
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
`
 
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
 
r
e
t
u
r
n
s
 
t
h
e
 
u
s
e
r
'
s
 
p
o
r
t
a
l
 
c
o
n
t
e
n
t
s
 
a
s
 
J
S
O
N




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
 
N
e
w
s
f
e
e
d
 
f
r
o
m
 
X
W
i
k
i




T
h
e
 
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
 
S
H
A
L
L
 
p
r
o
x
y
 
X
W
i
k
i
 
b
l
o
g
 
e
n
t
r
i
e
s
 
f
o
r
 
t
h
e
 
p
o
r
t
a
l


n
e
w
s
f
e
e
d
 
v
i
a
 
t
h
e
 
`
/
w
i
k
i
`
 
e
n
d
p
o
i
n
t
 
w
i
t
h
 
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
o
r
t
a
l
 
n
e
w
s
f
e
e
d
 
r
e
n
d
e
r
s


-
 
G
I
V
E
N
 
t
h
e
 
p
o
r
t
a
l
 
r
e
n
d
e
r
i
n
g
 
i
t
s
 
n
e
w
s
f
e
e
d
 
s
e
c
t
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
 
p
o
r
t
a
l
 
f
e
t
c
h
e
s
 
n
e
w
s
 
i
t
e
m
s


-
 
T
H
E
N
 
t
h
e
 
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
 
c
a
l
l
s
 
X
W
i
k
i
 
v
i
a
 
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


-
 
A
N
D
 
X
W
i
k
i
 
b
l
o
g
 
e
n
t
r
i
e
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
 
i
n
 
t
h
e
 
p
o
r
t
a
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
 
S
h
a
r
e
d
 
s
e
c
r
e
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
i
o
n




F
r
o
n
t
e
n
d
 
s
e
r
v
i
c
e
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
 
t
o
 
t
h
e
 
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
i
n
g
 
a
 
s
h
a
r
e
d


s
e
c
r
e
t
 
p
a
s
s
e
d
 
v
i
a
 
r
e
q
u
e
s
t
 
h
e
a
d
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
 
U
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
 
r
e
q
u
e
s
t
 
r
e
j
e
c
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
 
r
e
q
u
e
s
t
 
t
o
 
t
h
e
 
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
 
w
i
t
h
o
u
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
 
s
e
c
r
e
t


-
 
W
H
E
N
 
t
h
e
 
r
e
q
u
e
s
t
 
a
r
r
i
v
e
s


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
i
c
e
 
r
e
t
u
r
n
s
 
H
T
T
P
 
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
v
a
l
i
d
 
s
e
c
r
e
t
 
r
e
j
e
c
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
 
r
e
q
u
e
s
t
 
w
i
t
h
 
a
n
 
i
n
c
o
r
r
e
c
t
 
s
h
a
r
e
d
 
s
e
c
r
e
t


-
 
W
H
E
N
 
t
h
e
 
r
e
q
u
e
s
t
 
a
r
r
i
v
e
s


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
i
c
e
 
r
e
t
u
r
n
s
 
H
T
T
P
 
4
0
3
 
F
o
r
b
i
d
d
e
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
 
T
o
k
e
n
 
c
a
c
h
i
n
g
 
v
i
a
 
R
e
d
i
s




T
h
e
 
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
 
S
H
A
L
L
 
c
a
c
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
 
t
o
 
r
e
d
u
c
e


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
 
o
v
e
r
h
e
a
d
 
f
o
r
 
r
e
p
e
a
t
e
d
 
c
r
o
s
s
-
a
p
p
 
a
c
c
e
s
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
 
C
a
c
h
e
d
 
t
o
k
e
n
 
r
e
u
s
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
 
w
h
o
 
p
r
e
v
i
o
u
s
l
y
 
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
 
I
n
t
e
r
c
o
m


-
 
W
H
E
N
 
t
h
e
 
t
o
k
e
n
 
i
s
 
s
t
i
l
l
 
v
a
l
i
d
 
(
w
i
t
h
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
'
s
 
t
o
k
e
n
 
T
T
L
)


-
 
T
H
E
N
 
t
h
e
 
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
 
r
e
t
u
r
n
s
 
t
h
e
 
c
a
c
h
e
d
 
t
o
k
e
n


-
 
A
N
D
 
n
o
 
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
 
K
e
y
c
l
o
a
k
 
r
e
q
u
e
s
t
 
i
s
 
m
a
d
e




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
 
T
o
k
e
n
 
r
e
f
r
e
s
h


-
 
G
I
V
E
N
 
a
 
c
a
c
h
e
d
 
t
o
k
e
n
 
t
h
a
t
 
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
 
a
 
c
r
o
s
s
-
a
p
p
 
r
e
q
u
e
s
t
 
a
r
r
i
v
e
s


-
 
T
H
E
N
 
t
h
e
 
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
 
p
e
r
f
o
r
m
s
 
a
 
f
r
e
s
h
 
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


-
 
A
N
D
 
u
p
d
a
t
e
s
 
t
h
e
 
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
 
t
o
k
e
n




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
:
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
 
D
e
l
e
g
a
t
e
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
 
|


|
 
C
a
c
h
e
 
|
 
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
-
h
e
a
d
l
e
s
s
:
6
3
7
9
`
)
 
|


|
 
P
a
r
t
 
o
f
 
|
 
N
u
b
u
s
 
I
A
M
 
s
t
a
c
k
 
|

