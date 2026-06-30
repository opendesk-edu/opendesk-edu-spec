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
 
f
o
r
 
t
h
e
 
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
 
p
l
a
t
f
o
r
m
.
 
I
s
s
u
e
s
,


r
e
n
e
w
s
,
 
a
n
d
 
m
a
n
a
g
e
s
 
X
.
5
0
9
 
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
 
f
o
r
 
a
l
l
 
I
n
g
r
e
s
s
 
r
e
s
o
u
r
c
e
s
,
 
s
u
p
p
o
r
t
i
n
g


b
o
t
h
 
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
 
(
A
C
M
E
)
 
a
u
t
o
m
a
t
i
c
 
i
s
s
u
a
n
c
e
 
a
n
d
 
p
r
e
-
e
x
i
s
t
i
n
g
 
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
s
.




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
 
e
n
s
u
r
e
s
 
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
 
h
a
v
e
 
v
a
l
i
d
 
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
s
 
w
i
t
h
o
u
t
 
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
,
 
w
i
t
h
 
a
u
t
o
m
a
t
i
c
 
r
e
n
e
w
a
l
 
b
e
f
o
r
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
.




#
#
 
S
c
o
p
e




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
 
i
s
s
u
a
n
c
e
 
v
i
a
 
A
C
M
E
 
(
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
)
,
 
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
e
n
e
w
a
l
,
 
C
l
u
s
t
e
r
I
s
s
u
e
r
 
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
,
 
p
r
e
-
e
x
i
s
t
i
n
g
 
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
u
p
p
o
r
t
,
 
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
 
C
R
D
 
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
 
I
n
g
r
e
s
s
 
r
o
u
t
i
n
g
 
(
s
e
e
 
`
.
.
/
h
a
p
r
o
x
y
-
i
n
g
r
e
s
s
/
`
)
,
 
D
N
S
 
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
 
(
s
e
e
 
`
.
.
/
.
.
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
/
`
)
,
 
i
n
t
e
r
n
a
l
 
m
T
L
S
 
b
e
t
w
e
e
n
 
s
e
r
v
i
c
e
s




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
 
M
a
n
u
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
 
(
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
 
a
u
t
o
m
a
t
e
s
 
t
h
i
s
)


-
 
I
n
t
e
r
n
a
l
 
s
e
r
v
i
c
e
-
t
o
-
s
e
r
v
i
c
e
 
m
T
L
S
 
(
n
o
t
 
r
e
q
u
i
r
e
d
 
f
o
r
 
c
u
r
r
e
n
t
 
p
l
a
t
f
o
r
m
)


-
 
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
 
p
i
n
n
i
n
g
 
o
r
 
H
S
T
S
 
e
n
f
o
r
c
e
m
e
n
t
 
(
s
e
r
v
i
c
e
-
l
e
v
e
l
 
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
)


-
 
W
i
l
d
c
a
r
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
 
a
u
t
o
m
a
t
i
o
n
 
(
e
a
c
h
 
s
e
r
v
i
c
e
 
g
e
t
s
 
i
t
s
 
o
w
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
 
A
u
t
o
m
a
t
i
c
 
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
 
i
s
s
u
a
n
c
e




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
 
S
H
A
L
L
 
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
 
i
s
s
u
e
 
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
s
 
f
o
r
 
a
l
l
 
I
n
g
r
e
s
s


r
e
s
o
u
r
c
e
s
 
u
s
i
n
g
 
t
h
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
 
C
l
u
s
t
e
r
I
s
s
u
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
 
i
s
s
u
e
d
 
v
i
a
 
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


-
 
G
I
V
E
N
 
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
 
i
n
s
t
a
l
l
e
d
 
w
i
t
h
 
a
 
`
C
l
u
s
t
e
r
I
s
s
u
e
r
`
 
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
 
f
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


-
 
A
N
D
 
a
n
 
I
n
g
r
e
s
s
 
r
e
s
o
u
r
c
e
 
w
i
t
h
 
`
i
n
g
r
e
s
s
C
l
a
s
s
N
a
m
e
:
 
h
a
p
r
o
x
y
`
 
a
n
d
 
T
L
S
 
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
 
W
H
E
N
 
t
h
e
 
I
n
g
r
e
s
s
 
i
s
 
c
r
e
a
t
e
d


-
 
T
H
E
N
 
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
 
r
e
q
u
e
s
t
s
 
a
 
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
 
(
A
C
M
E
 
H
T
T
P
-
0
1
 
c
h
a
l
l
e
n
g
e
)


-
 
A
N
D
 
t
h
e
 
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
t
o
r
e
d
 
i
n
 
a
 
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


-
 
A
N
D
 
t
h
e
 
I
n
g
r
e
s
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
 
t
h
e
 
s
e
c
r
e
t
 
f
o
r
 
T
L
S
 
t
e
r
m
i
n
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
 
a
u
t
o
-
r
e
n
e
w
a
l


-
 
G
I
V
E
N
 
a
 
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
u
e
d
 
b
y
 
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


-
 
W
H
E
N
 
t
h
e
 
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
 
a
p
p
r
o
a
c
h
e
s
 
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
 
(
3
0
 
d
a
y
s
 
b
e
f
o
r
e
)


-
 
T
H
E
N
 
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
 
r
e
n
e
w
s
 
t
h
e
 
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


-
 
A
N
D
 
t
h
e
 
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
 
r
e
p
l
a
c
e
s
 
t
h
e
 
o
l
d
 
o
n
e
 
i
n
 
t
h
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


-
 
A
N
D
 
t
h
e
r
e
 
i
s
 
n
o
 
s
e
r
v
i
c
e
 
d
i
s
r
u
p
t
i
o
n
 
d
u
r
i
n
g
 
r
e
n
e
w
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
 
P
r
e
-
e
x
i
s
t
i
n
g
 
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
u
p
p
o
r
t




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
 
u
s
i
n
g
 
p
r
e
-
e
x
i
s
t
i
n
g
 
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
s


i
n
s
t
e
a
d
 
o
f
 
A
C
M
E
-
i
s
s
u
e
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
 
I
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
 
G
I
V
E
N
 
a
 
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
 
p
r
o
v
i
d
e
d
 
b
y
 
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
 
C
A
)


-
 
W
H
E
N
 
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
s
 
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
 
T
H
E
N
 
t
h
e
 
I
n
g
r
e
s
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
 
t
h
e
 
p
r
o
v
i
d
e
d
 
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
 
d
i
r
e
c
t
l
y


-
 
A
N
D
 
n
o
 
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
 
`
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
`
 
C
R
D
 
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
 
f
o
r
 
t
h
a
t
 
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
 
n
o
 
A
C
M
E
 
c
h
a
l
l
e
n
g
e
 
i
s
 
i
n
i
t
i
a
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
 
C
l
u
s
t
e
r
I
s
s
u
e
r
 
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
 
S
H
A
L
L
 
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
 
w
i
t
h
 
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
 
`
C
l
u
s
t
e
r
I
s
s
u
e
r
`
 
f
o
r


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
u
a
n
c
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
 
C
l
u
s
t
e
r
I
s
s
u
e
r


-
 
G
I
V
E
N
 
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
 
d
e
p
l
o
y
e
d
 
i
n
 
t
h
e
 
c
l
u
s
t
e
r


-
 
T
H
E
N
 
a
 
`
C
l
u
s
t
e
r
I
s
s
u
e
r
`
 
o
f
 
t
y
p
e
 
`
a
c
m
e
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
 
w
i
t
h
:


 
 
-
 
S
e
r
v
e
r
:
 
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
 
p
r
o
d
u
c
t
i
o
n
 
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
a
c
m
e
-
v
0
2
.
a
p
i
.
l
e
t
s
e
n
c
r
y
p
t
.
o
r
g
/
d
i
r
e
c
t
o
r
y
`
)


 
 
-
 
S
o
l
v
e
r
:
 
H
T
T
P
-
0
1
 
(
v
i
a
 
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
)


 
 
-
 
E
m
a
i
l
:
 
p
l
a
t
f
o
r
m
 
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
 
e
m
a
i
l


-
 
A
N
D
 
t
h
e
 
i
s
s
u
e
r
 
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
 
t
o
 
a
l
l
 
n
a
m
e
s
p
a
c
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
r
t
i
f
i
c
a
t
e
 
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
s
 
S
H
A
L
L
 
b
e
 
v
a
l
i
d
a
t
e
d
 
b
e
f
o
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
 
t
o
 
p
r
e
v
e
n
t
 
s
e
r
v
i
c
e


d
i
s
r
u
p
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
 
e
x
p
i
r
y
 
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
 
a
 
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
 
s
t
o
r
e
d
 
i
n
 
a
 
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


-
 
W
H
E
N
 
t
h
e
 
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
 
c
h
e
c
k
e
d
 
f
o
r
 
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


-
 
T
H
E
N
 
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
 
d
a
t
e
 
i
s
 
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
 
i
n
 
t
h
e
 
f
u
t
u
r
e


-
 
A
N
D
 
b
r
o
w
s
e
r
 
c
l
i
e
n
t
s
 
d
o
 
n
o
t
 
s
h
o
w
 
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


-
 
G
I
V
E
N
 
a
 
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
u
e
d
 
b
y
 
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
 
C
A


-
 
W
H
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
s
 
v
i
a
 
H
T
T
P
S


-
 
T
H
E
N
 
t
h
e
 
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
 
i
s
 
v
a
l
i
d


-
 
A
N
D
 
n
o
 
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
 
e
r
r
o
r
s
 
o
c
c
u
r




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
 
P
u
r
p
o
s
e
 
|
 
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
 
C
o
n
t
r
o
l
l
e
r
 
|
 
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
 
i
s
s
u
a
n
c
e
,
 
r
e
n
e
w
a
l
,
 
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
 
`
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
`
 
|


|
 
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
 
W
e
b
h
o
o
k
 
|
 
A
d
m
i
s
s
i
o
n
/
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
 
w
e
b
h
o
o
k
 
|
 
`
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
`
 
|


|
 
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
 
c
a
i
n
j
e
c
t
o
r
 
|
 
C
A
 
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
n
j
e
c
t
i
o
n
 
i
n
t
o
 
C
o
n
f
i
g
M
a
p
s
 
|
 
`
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
`
 
|


|
 
C
l
u
s
t
e
r
I
s
s
u
e
r
 
|
 
A
C
M
E
 
i
s
s
u
e
r
 
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
 
|
 
C
l
u
s
t
e
r
-
s
c
o
p
e
d
 
|




#
#
 
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
C
M
E
 
S
e
r
v
e
r
 
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
a
c
m
e
-
v
0
2
.
a
p
i
.
l
e
t
s
e
n
c
r
y
p
t
.
o
r
g
/
d
i
r
e
c
t
o
r
y
`
 
(
p
r
o
d
u
c
t
i
o
n
)
 
|


|
 
C
h
a
l
l
e
n
g
e
 
T
y
p
e
 
|
 
H
T
T
P
-
0
1
 
(
v
i
a
 
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
)
 
|


|
 
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
 
S
e
c
r
e
t
 
|
 
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
`
 
(
w
i
l
d
c
a
r
d
/
p
r
i
m
a
r
y
)
 
|


|
 
D
e
p
l
o
y
 
s
t
a
g
e
 
|
 
P
r
e
-
i
n
f
r
a
 
(
r
e
q
u
i
r
e
d
 
b
e
f
o
r
e
 
I
n
g
r
e
s
s
 
r
e
s
o
u
r
c
e
s
)
 
|


|
 
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
 
`
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
`
 
|




#
#
 
S
e
r
v
i
c
e
s
 
U
s
i
n
g
 
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




|
 
S
e
r
v
i
c
e
 
|
 
D
o
m
a
i
n
 
|
 
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
 
M
e
t
h
o
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
-
-
-
-
-
-
|


|
 
K
e
y
c
l
o
a
k
 
|
 
`
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
`
 
|
 
A
C
M
E
 
(
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
)
 
|


|
 
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
 
|
 
`
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
 
|
 
A
C
M
E
 
(
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
)
 
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
 
|
 
A
C
M
E
 
(
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
)
 
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
o
p
e
n
c
l
o
u
d
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
 
|
 
A
C
M
E
 
(
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
)
 
|


|
 
A
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
 
|
 
`
*
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
 
|
 
A
C
M
E
 
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
 
|




#
#
 
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
 
d
o
e
s
 
n
o
t
 
e
x
p
o
s
e
 
s
e
r
v
i
c
e
-
l
e
v
e
l
 
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
.
 
I
t
 
m
a
n
a
g
e
s


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
s
 
f
o
r
 
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
 
h
a
v
e
 
t
h
e
i
r
 
o
w
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
s
.




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
 
i
s
s
u
e
s
 
T
L
S
 
c
e
r
t
 
f
o
r
 
K
e
y
c
l
o
a
k
 
e
n
d
p
o
i
n
t


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
 
S
A
M
L
 
2
.
0
 
S
P
-
S
S
O
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
s
a
m
l
-
2
0
-
s
p
-
i
n
i
t
i
a
t
e
d
-
s
s
o
)
 
—
 
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
 
i
s
s
u
e
s
 
T
L
S
 
c
e
r
t
s
 
f
o
r
 
a
l
l
 
S
A
M
L
 
S
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
 
S
i
l
e
n
t
 
L
o
g
i
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
i
n
t
e
r
c
o
m
-
s
i
l
e
n
t
-
l
o
g
i
n
)
 
—
 
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
 
i
s
s
u
e
s
 
T
L
S
 
c
e
r
t
 
f
o
r
 
I
n
t
e
r
c
o
m
 
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
l
l
 
1
3
 
c
o
n
t
r
a
c
t
s
 
i
n
 
t
h
e
 
[
C
o
n
t
r
a
c
t
 
I
n
d
e
x
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
i
n
d
e
x
)
 
d
e
p
e
n
d
 
o
n
 
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
 
f
o
r
 
T
L
S




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
 
c
o
n
t
r
o
l
l
e
r
 
|
 
1
0
0
1
 
(
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
T
T
P
-
0
1
 
c
h
a
l
l
e
n
g
e
 
s
o
l
v
e
r
)


-
 
D
N
S
 
(
`
*
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
 
→
 
`
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
`
)


-
 
I
n
t
e
r
n
e
t
 
a
c
c
e
s
s
 
(
A
C
M
E
 
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
 
r
e
q
u
i
r
e
s
 
o
u
t
b
o
u
n
d
 
H
T
T
P
S
 
t
o
 
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
]
(
.
.
/
h
a
p
r
o
x
y
-
i
n
g
r
e
s
s
/
)
 
(
T
L
S
 
t
e
r
m
i
n
a
t
i
o
n
,
 
A
C
M
E
 
c
h
a
l
l
e
n
g
e
 
r
o
u
t
i
n
g
)


-
 
[
N
e
t
w
o
r
k
i
n
g
]
(
.
.
/
.
.
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
/
)
 
(
D
N
S
,
 
p
r
o
x
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
)


-
 
[
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
]
(
.
.
/
.
.
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
)
 
(
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
 
r
u
n
b
o
o
k
)




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
 
=
 
s
e
r
v
i
c
e
 
o
u
t
a
g
e
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
 
V
a
l
i
d
i
t
y
*
*
 
|
 
>
3
0
 
d
a
y
s
 
r
e
m
a
i
n
i
n
g
 
|
 
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
 
s
e
c
r
e
t
`
 
+
 
`
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
 
|


|
 
*
*
R
e
n
e
w
a
l
 
S
u
c
c
e
s
s
 
R
a
t
e
*
*
 
|
 
1
0
0
%
 
|
 
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
 
e
v
e
n
t
s
 
|


|
 
*
*
I
s
s
u
a
n
c
e
 
L
a
t
e
n
c
y
*
*
 
|
 
<
5
 
m
i
n
u
t
e
s
 
|
 
T
i
m
e
 
f
r
o
m
 
I
n
g
r
e
s
s
 
c
r
e
a
t
i
o
n
 
t
o
 
v
a
l
i
d
 
c
e
r
t
 
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
 
e
x
p
i
r
i
n
g
 
i
n
 
<
7
 
d
a
y
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
 
i
s
s
u
a
n
c
e
 
f
a
i
l
u
r
e
 
→
 
P
3
 
a
l
e
r
t


-
 
A
C
M
E
 
c
h
a
l
l
e
n
g
e
 
f
a
i
l
u
r
e
 
→
 
P
3
 
a
l
e
r
t




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
 
N
o
n
-
c
r
i
t
i
c
a
l
 
(
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
 
a
r
e
 
r
e
-
i
s
s
u
a
b
l
e
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
s
 
c
a
n
 
b
e
 
r
e
-
i
s
s
u
e
d
 
a
t
 
a
n
y
 
t
i
m
e
 
f
r
o
m
 
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


-
 
I
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
s
 
c
a
n
 
b
e
 
r
e
-
d
e
p
l
o
y
e
d
 
f
r
o
m
 
f
i
l
e
s
 
i
n
 
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
`


-
 
N
o
 
d
a
t
a
 
l
o
s
s
 
—
 
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
 
a
r
e
 
e
p
h
e
m
e
r
a
l
 
b
y
 
n
a
t
u
r
e




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
 
S
t
e
p
s
*
*
:


1
.
 
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
 
C
R
D
:
 
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
l
e
t
e
 
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
 
<
n
a
m
e
>
`


2
.
 
R
e
-
c
r
e
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
r
 
r
e
-
d
e
p
l
o
y
 
I
n
g
r
e
s
s


3
.
 
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
 
i
s
s
u
e
d




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




-
 
*
*
H
T
T
P
-
0
1
 
c
h
a
l
l
e
n
g
e
*
*
:
 
R
e
q
u
i
r
e
s
 
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
 
t
o
 
r
o
u
t
e
 
A
C
M
E
 
c
h
a
l
l
e
n
g
e
 
r
e
q
u
e
s
t
s
 
(
`
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
a
c
m
e
-
c
h
a
l
l
e
n
g
e
/
`
)
 
t
o
 
t
h
e
 
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
 
s
o
l
v
e
r
 
p
o
d
.


-
 
*
*
R
a
t
e
 
l
i
m
i
t
s
*
*
:
 
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
 
h
a
s
 
i
s
s
u
a
n
c
e
 
r
a
t
e
 
l
i
m
i
t
s
 
(
5
0
 
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
 
p
e
r
 
r
e
g
i
s
t
e
r
e
d
 
d
o
m
a
i
n
 
p
e
r
 
w
e
e
k
)
.
 
D
o
 
n
o
t
 
d
e
l
e
t
e
 
a
n
d
 
r
e
-
c
r
e
a
t
e
 
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
 
u
n
n
e
c
e
s
s
a
r
i
l
y
.


-
 
*
*
P
r
e
-
e
x
i
s
t
i
n
g
 
c
e
r
t
s
*
*
:
 
S
o
m
e
 
s
e
r
v
i
c
e
s
 
u
s
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
s
 
i
n
s
t
e
a
d
 
o
f
 
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
.
 
T
h
e
s
e
 
r
e
q
u
i
r
e
 
m
a
n
u
a
l
 
r
o
t
a
t
i
o
n
 
w
h
e
n
 
t
h
e
y
 
e
x
p
i
r
e
 
(
s
e
e
 
[
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
 
r
u
n
b
o
o
k
]
(
.
.
/
.
.
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
)
)
.

