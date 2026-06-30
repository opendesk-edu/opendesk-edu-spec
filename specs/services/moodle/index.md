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
 
M
o
o
d
l
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




P
l
u
g
i
n
-
r
i
c
h
 
l
e
a
r
n
i
n
g
 
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
L
M
S
)
 
p
r
o
v
i
d
i
n
g
 
a
s
s
i
g
n
m
e
n
t
s
,
 
w
o
r
k
s
h
o
p
s
,


g
r
a
d
e
b
o
o
k
,
 
f
o
r
u
m
s
,
 
q
u
i
z
z
e
s
,
 
S
C
O
R
M
 
p
a
c
k
a
g
e
s
,
 
a
n
d
 
a
n
 
e
x
t
e
n
s
i
v
e
 
p
l
u
g
i
n
 
e
c
o
s
y
s
t
e
m
.


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
e
d
 
v
i
a
 
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
 
S
A
M
L
 
2
.
0
 
S
P
 
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
,
 
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
 
c
u
s
t
o
m


D
o
c
k
e
r
 
i
m
a
g
e
 
(
`
m
o
o
d
l
e
-
s
h
i
b
`
)
 
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
e
d
 
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
 
S
P
 
d
a
e
m
o
n
 
a
n
d
 
A
p
a
c
h
e


w
e
b
 
s
e
r
v
e
r
.




M
o
o
d
l
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
 
d
a
t
a
b
a
s
e
 
(
M
a
r
i
a
D
B
 
b
y
 
d
e
f
a
u
l
t
)
,
 
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
 
C
e
p
h
F
S
 
s
t
o
r
a
g
e


f
o
r
 
c
o
u
r
s
e
 
f
i
l
e
s
 
a
n
d
 
u
s
e
r
 
d
a
t
a
,
 
a
n
d
 
s
u
p
p
o
r
t
s
 
b
a
c
k
c
h
a
n
n
e
l
 
l
o
g
o
u
t
 
v
i
a
 
S
A
M
L
.


T
h
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
 
i
n
c
l
u
d
e
s
 
v
o
l
u
m
e
 
p
e
r
m
i
s
s
i
o
n
 
i
n
i
t
i
a
l
i
z
a
t
i
o
n
 
c
o
n
t
a
i
n
e
r
s
 
a
n
d
 
a


d
e
d
i
c
a
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
 
a
c
c
o
u
n
t
 
f
o
r
 
f
i
l
e
s
y
s
t
e
m
 
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
 
M
o
o
d
l
e
 
L
M
S
 
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
 
S
A
M
L
 
2
.
0
 
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
 
c
u
s
t
o
m
 
D
o
c
k
e
r
 
i
m
a
g
e
 
w
i
t
h
 
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
 
S
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
,
 
c
o
u
r
s
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
,
 
g
r
a
d
e
b
o
o
k
,
 
f
o
r
u
m
s
,
 
q
u
i
z
z
e
s
,
 
S
C
O
R
M
 
s
u
p
p
o
r
t
,
 
p
l
u
g
i
n
 
e
c
o
s
y
s
t
e
m
,
 
M
a
r
i
a
D
B
 
b
a
c
k
e
n
d
,
 
C
e
p
h
F
S
 
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
 
s
t
o
r
a
g
e


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
 
L
M
S
 
(
s
e
e
 
I
L
I
A
S
)
,
 
M
o
o
d
l
e
 
p
l
u
g
i
n
 
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
 
(
s
e
e
 
M
o
o
d
l
e
 
P
l
u
g
i
n
 
D
a
t
a
b
a
s
e
)
,
 
c
u
s
t
o
m
 
M
o
o
d
l
e
 
t
h
e
m
e
 
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
,
 
m
o
b
i
l
e
 
a
p
p
 
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
 
L
M
S
 
(
s
e
e
 
`
.
.
/
i
l
i
a
s
`
)


-
 
M
o
o
d
l
e
 
p
l
u
g
i
n
 
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
 
(
s
e
e
 
M
o
o
d
l
e
 
P
l
u
g
i
n
 
D
a
t
a
b
a
s
e
)


-
 
C
u
s
t
o
m
 
M
o
o
d
l
e
 
t
h
e
m
e
 
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
h
i
b
b
o
l
e
t
h
 
S
A
M
L
 
2
.
0
 
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




M
o
o
d
l
e
 
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
 
u
s
e
r
s
 
v
i
a
 
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
 
S
A
M
L
 
2
.
0
 
S
e
r
v
i
c
e
 
P
r
o
v
i
d
e
r
 
w
i
t
h


S
P
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
 
S
S
O
 
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
.
 
T
h
e
 
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
 
S
P
 
d
a
e
m
o
n
 
r
u
n
s
 
a
l
o
n
g
s
i
d
e


A
p
a
c
h
e
 
i
n
 
t
h
e
 
s
a
m
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
 
a
c
c
e
s
s
e
s
 
M
o
o
d
l
e
 
v
i
a
 
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


-
 
W
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
 
M
o
o
d
l
e
 
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
 
i
n
 
N
u
b
u
s


-
 
T
H
E
N
 
M
o
o
d
l
e
 
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
o
 
K
e
y
c
l
o
a
k
 
v
i
a
 
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
 
S
P
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
 
S
S
O


-
 
A
N
D
 
u
p
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
,
 
S
A
M
L
 
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
 
m
a
p
 
t
o
 
t
h
e
 
M
o
o
d
l
e
 
u
s
e
r
 
p
r
o
f
i
l
e


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
 
s
e
e
s
 
e
n
r
o
l
l
e
d
 
c
o
u
r
s
e
s
 
o
n
 
t
h
e
 
M
o
o
d
l
e
 
d
a
s
h
b
o
a
r
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
 
S
P
 
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
 
M
o
o
d
l
e
 
d
e
p
l
o
y
e
d
 
w
i
t
h
 
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
 
S
P
 
e
n
a
b
l
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
 
S
P
 
e
n
t
i
t
y
 
I
D
 
i
s
 
`
h
t
t
p
s
:
/
/
m
o
o
d
l
e
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
<
d
o
m
a
i
n
>
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
 
I
d
P
 
m
e
t
a
d
a
t
a
 
U
R
L
 
i
s
 
`
h
t
t
p
s
:
/
/
i
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
<
d
o
m
a
i
n
>
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
s
a
m
l
/
d
e
s
c
r
i
p
t
o
r
`


-
 
A
N
D
 
S
P
 
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
 
m
o
u
n
t
e
d
 
f
r
o
m
:


 
 
-
 
C
o
n
f
i
g
M
a
p
 
`
m
o
o
d
l
e
-
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
-
s
p
-
c
o
n
f
i
g
`
 
→
 
`
/
e
t
c
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
 
(
r
e
a
d
-
o
n
l
y
)


 
 
-
 
S
e
c
r
e
t
 
`
m
o
o
d
l
e
-
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
-
s
p
-
s
e
c
r
e
t
`
 
→
 
`
/
e
t
c
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
/
c
e
r
t
s
`
 
(
r
e
a
d
-
o
n
l
y
)


 
 
-
 
C
o
n
f
i
g
M
a
p
 
`
m
o
o
d
l
e
-
a
p
a
c
h
e
-
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
-
c
o
n
f
i
g
`
 
→
 
`
/
e
t
c
/
a
p
a
c
h
e
2
/
c
o
n
f
-
e
n
a
b
l
e
d
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
.
c
o
n
f
`
 
(
r
e
a
d
-
o
n
l
y
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
 
X
M
L
 
c
a
t
a
l
o
g
 
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
 
t
h
e
 
M
o
o
d
l
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


-
 
T
H
E
N
 
`
X
M
L
_
C
A
T
A
L
O
G
_
F
I
L
E
S
`
 
i
s
 
s
e
t
 
t
o
 
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
/
O
p
e
n
S
A
M
L
 
X
M
L
 
c
a
t
a
l
o
g
s
:


 
 
-
 
`
/
u
s
r
/
s
h
a
r
e
/
x
m
l
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
/
c
a
t
a
l
o
g
.
x
m
l
`


 
 
-
 
`
/
u
s
r
/
s
h
a
r
e
/
x
m
l
/
x
m
l
t
o
o
l
i
n
g
/
c
a
t
a
l
o
g
.
x
m
l
`


 
 
-
 
`
/
u
s
r
/
s
h
a
r
e
/
x
m
l
/
o
p
e
n
s
a
m
l
/
s
a
m
l
2
0
-
c
a
t
a
l
o
g
.
x
m
l
`


 
 
-
 
`
/
u
s
r
/
s
h
a
r
e
/
x
m
l
/
o
p
e
n
s
a
m
l
/
s
a
m
l
1
1
-
c
a
t
a
l
o
g
.
x
m
l
`




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
x
t
e
r
n
a
l
 
d
a
t
a
b
a
s
e
 
(
M
a
r
i
a
D
B
)




M
o
o
d
l
e
 
S
H
A
L
L
 
c
o
n
n
e
c
t
 
t
o
 
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
 
M
a
r
i
a
D
B
 
d
a
t
a
b
a
s
e
 
f
o
r
 
m
e
t
a
d
a
t
a
 
s
t
o
r
a
g
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
x
t
e
r
n
a
l
 
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
 
M
o
o
d
l
e
 
c
o
n
n
e
c
t
s
 
t
o
 
`
m
o
o
d
l
e
-
m
a
r
i
a
d
b
:
3
3
0
6
`


-
 
A
N
D
 
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
 
a
s
 
`
m
o
o
d
l
e
`
 
u
s
e
r
 
w
i
t
h
 
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
 
`
m
o
o
d
l
e
-
d
a
t
a
b
a
s
e
-
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
`
 
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
 
d
a
t
a
b
a
s
e
 
n
a
m
e
 
i
s
 
`
m
o
o
d
l
e
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
 
s
e
t
 
i
n
 
t
h
e
 
`
m
o
o
d
l
e
-
d
a
t
a
b
a
s
e
-
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
`
 
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
 
M
o
o
d
l
e
'
s
 
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


-
 
T
H
E
N
 
M
o
o
d
l
e
 
r
e
a
d
s
 
t
h
e
 
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
 
a
n
d
 
r
e
c
o
n
n
e
c
t
s


-
 
A
N
D
 
e
x
i
s
t
i
n
g
 
c
o
u
r
s
e
 
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
e
r
s
i
s
t
e
n
t
 
f
i
l
e
 
s
t
o
r
a
g
e




M
o
o
d
l
e
 
S
H
A
L
L
 
p
e
r
s
i
s
t
 
c
o
u
r
s
e
 
f
i
l
e
s
,
 
u
s
e
r
 
u
p
l
o
a
d
s
,
 
a
n
d
 
p
l
u
g
i
n
 
d
a
t
a
 
o
n
 
C
e
p
h
F
S
 
R
W
X
 
s
t
o
r
a
g
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
 
C
o
u
r
s
e
 
f
i
l
e
 
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
n
 
i
n
s
t
r
u
c
t
o
r
 
u
p
l
o
a
d
i
n
g
 
c
o
u
r
s
e
 
m
a
t
e
r
i
a
l
s
 
(
P
D
F
s
,
 
v
i
d
e
o
s
,
 
S
C
O
R
M
 
p
a
c
k
a
g
e
s
)


-
 
W
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
s
 
a
r
e
 
s
a
v
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


-
 
T
H
E
N
 
d
a
t
a
 
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
 
t
h
e
 
`
m
o
o
d
l
e
-
d
a
t
a
`
 
P
V
C
 
(
m
o
u
n
t
:
 
`
/
b
i
t
n
a
m
i
/
m
o
o
d
l
e
`
)


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
 
c
o
n
t
e
n
t
 
s
u
r
v
i
v
e
s
 
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
 
a
n
d
 
u
p
g
r
a
d
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
 
s
e
l
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
 
t
h
e
 
M
o
o
d
l
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
 
T
H
E
N
 
t
h
e
 
P
V
C
 
u
s
e
s
 
`
s
t
o
r
a
g
e
C
l
a
s
s
N
a
m
e
s
.
R
W
O
`
 
o
r
 
`
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
.
s
t
o
r
a
g
e
s
.
m
o
o
d
l
e
.
s
t
o
r
a
g
e
C
l
a
s
s
N
a
m
e
`


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
 
m
o
d
e
 
i
s
 
`
R
e
a
d
W
r
i
t
e
M
a
n
y
`
 
(
s
h
a
r
e
d
 
a
c
r
o
s
s
 
r
e
p
l
i
c
a
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
 
M
u
l
t
i
-
r
e
p
l
i
c
a
 
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




M
o
o
d
l
e
 
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
p
l
i
c
a
s
 
f
o
r
 
h
i
g
h
 
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
 
T
w
o
 
r
e
p
l
i
c
a
s
 
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
 
`
r
e
p
l
i
c
a
C
o
u
n
t
:
 
2
`
 
(
d
e
f
a
u
l
t
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
l
o
y
m
e
n
t
 
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
 
2
 
M
o
o
d
l
e
 
p
o
d
s
 
r
u
n
 
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


-
 
A
N
D
 
t
h
e
 
i
n
g
r
e
s
s
 
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
 
l
o
a
d
-
b
a
l
a
n
c
e
s
 
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
r
o
s
s
 
r
e
p
l
i
c
a
s


-
 
A
N
D
 
b
o
t
h
 
p
o
d
s
 
s
h
a
r
e
 
t
h
e
 
s
a
m
e
 
P
V
C
 
(
R
W
X
 
r
e
q
u
i
r
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
 
I
n
i
t
i
a
l
 
s
e
t
u
p
 
a
n
d
 
i
n
s
t
a
l
l
a
t
i
o
n




M
o
o
d
l
e
 
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
 
i
n
s
t
a
l
l
a
t
i
o
n
 
o
n
 
f
i
r
s
t
 
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
s
h
 
i
n
s
t
a
l
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
 
`
M
O
O
D
L
E
_
S
K
I
P
_
I
N
S
T
A
L
L
:
 
"
f
a
l
s
e
"
`
 
(
d
e
f
a
u
l
t
)


-
 
W
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
 
p
o
d
 
s
t
a
r
t
s


-
 
T
H
E
N
 
M
o
o
d
l
e
 
r
u
n
s
 
t
h
e
 
i
n
s
t
a
l
l
e
r


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
 
t
h
e
 
a
d
m
i
n
 
a
c
c
o
u
n
t
 
w
i
t
h
 
`
M
O
O
D
L
E
_
U
S
E
R
N
A
M
E
`
/
`
M
O
O
D
L
E
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


-
 
A
N
D
 
c
o
n
f
i
g
u
r
e
s
 
t
h
e
 
s
i
t
e
 
n
a
m
e
 
`
M
O
O
D
L
E
_
S
I
T
E
_
N
A
M
E
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
 
S
k
i
p
 
i
n
s
t
a
l
l
a
t
i
o
n
 
o
n
 
e
x
i
s
t
i
n
g
 
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
 
`
M
O
O
D
L
E
_
S
K
I
P
_
I
N
S
T
A
L
L
:
 
"
t
r
u
e
"
`


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
d
 
s
t
a
r
t
s


-
 
T
H
E
N
 
M
o
o
d
l
e
 
s
k
i
p
s
 
t
h
e
 
i
n
s
t
a
l
l
a
t
i
o
n
 
w
i
z
a
r
d


-
 
A
N
D
 
c
o
n
n
e
c
t
s
 
d
i
r
e
c
t
l
y
 
t
o
 
t
h
e
 
e
x
i
s
t
i
n
g
 
d
a
t
a
b
a
s
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
 
S
e
c
u
r
i
t
y
 
c
o
n
t
e
x
t




M
o
o
d
l
e
 
S
H
A
L
L
 
r
u
n
 
a
s
 
a
 
n
o
n
-
r
o
o
t
 
u
s
e
r
 
w
i
t
h
 
d
r
o
p
p
e
d
 
c
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
o
n
t
a
i
n
e
r
 
s
e
c
u
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
 
t
h
e
 
M
o
o
d
l
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
 
T
H
E
N
 
`
r
u
n
A
s
U
s
e
r
:
 
1
0
0
1
`
,
 
`
r
u
n
A
s
G
r
o
u
p
:
 
1
0
0
1
`


-
 
A
N
D
 
`
f
s
G
r
o
u
p
:
 
1
0
0
1
`


-
 
A
N
D
 
`
a
l
l
o
w
P
r
i
v
i
l
e
g
e
E
s
c
a
l
a
t
i
o
n
:
 
f
a
l
s
e
`
,
 
`
p
r
i
v
i
l
e
g
e
d
:
 
f
a
l
s
e
`
,
 
`
r
u
n
A
s
N
o
n
R
o
o
t
:
 
t
r
u
e
`


-
 
A
N
D
 
a
l
l
 
c
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
 
a
r
e
 
d
r
o
p
p
e
d
 
(
`
A
L
L
`
)


-
 
A
N
D
 
`
s
e
c
c
o
m
p
P
r
o
f
i
l
e
:
 
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
`




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




M
o
o
d
l
e
 
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
 
o
n
 
p
o
r
t
 
8
0
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
v
e
n
e
s
s
 
p
r
o
b
e


-
 
G
I
V
E
N
 
M
o
o
d
l
e
 
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
 
a
 
T
C
P
 
l
i
v
e
n
e
s
s
 
p
r
o
b
e
 
o
n
 
p
o
r
t
 
8
0
 
w
i
t
h
 
3
0
s
 
i
n
i
t
i
a
l
 
d
e
l
a
y
 
a
n
d
 
1
0
s
 
p
e
r
i
o
d


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


-
 
G
I
V
E
N
 
M
o
o
d
l
e
 
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
 
a
 
T
C
P
 
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
 
o
n
 
p
o
r
t
 
8
0
 
w
i
t
h
 
5
s
 
i
n
i
t
i
a
l
 
d
e
l
a
y
 
a
n
d
 
5
s
 
p
e
r
i
o
d


-
 
A
N
D
 
p
o
d
s
 
a
r
e
 
r
e
m
o
v
e
d
 
f
r
o
m
 
s
e
r
v
i
c
e
 
w
h
e
n
 
n
o
t
 
r
e
a
d
y




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
u
r
a
t
i
o
n




M
o
o
d
l
e
 
S
H
A
L
L
 
b
e
 
a
c
c
e
s
s
i
b
l
e
 
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
 
i
n
g
r
e
s
s
 
w
i
t
h
 
T
L
S
 
a
n
d
 
l
a
r
g
e
 
f
i
l
e
 
u
p
l
o
a
d
 
s
u
p
p
o
r
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
 
H
T
T
P
S
 
a
c
c
e
s
s
 
w
i
t
h
 
l
a
r
g
e
 
u
p
l
o
a
d
s


-
 
G
I
V
E
N
 
M
o
o
d
l
e
 
b
e
h
i
n
d
 
H
A
P
r
o
x
y
 
i
n
g
r
e
s
s


-
 
T
H
E
N
 
`
s
s
l
-
r
e
d
i
r
e
c
t
:
 
"
t
r
u
e
"
`
 
e
n
f
o
r
c
e
s
 
H
T
T
P
S


-
 
A
N
D
 
`
p
r
o
x
y
-
b
o
d
y
-
s
i
z
e
:
 
"
2
0
0
M
"
`
 
a
l
l
o
w
s
 
l
a
r
g
e
 
c
o
u
r
s
e
 
f
i
l
e
 
u
p
l
o
a
d
s


-
 
A
N
D
 
`
t
i
m
e
o
u
t
-
s
e
r
v
e
r
:
 
"
3
0
0
s
"
`
 
a
n
d
 
`
t
i
m
e
o
u
t
-
c
l
i
e
n
t
:
 
"
3
0
0
s
"
`
 
a
l
l
o
w
 
s
l
o
w
 
u
p
l
o
a
d
s


-
 
A
N
D
 
T
L
S
 
i
s
 
t
e
r
m
i
n
a
t
e
d
 
v
i
a
 
`
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
-
p
r
o
d
`
 
c
l
u
s
t
e
r
 
i
s
s
u
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
 
P
D
B
 
f
o
r
 
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




M
o
o
d
l
e
 
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
 
P
o
d
D
i
s
r
u
p
t
i
o
n
B
u
d
g
e
t
 
t
o
 
e
n
s
u
r
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
 
d
u
r
i
n
g
 
n
o
d
e
 
m
a
i
n
t
e
n
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
 
N
o
d
e
 
d
r
a
i
n
 
d
u
r
i
n
g
 
m
a
i
n
t
e
n
a
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
 
P
D
B
 
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
 
M
o
o
d
l
e


-
 
W
H
E
N
 
a
 
n
o
d
e
 
i
s
 
d
r
a
i
n
e
d


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
 
M
o
o
d
l
e
 
p
o
d
 
r
e
m
a
i
n
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
 
s
t
u
d
e
n
t
s
 
c
a
n
 
c
o
n
t
i
n
u
e
 
a
c
c
e
s
s
i
n
g
 
c
o
u
r
s
e
s




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
 
S
A
M
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
i
o
n


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
 
A
p
a
c
h
e
/
P
H
P
 
(
M
o
o
d
l
e
)
 
|
 
3
3
 
(
m
o
o
d
l
e
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
 
S
P
 
D
o
c
k
e
r
 
i
m
a
g
e
*
*
:
 
M
o
o
d
l
e
 
r
e
q
u
i
r
e
s
 
a
 
c
u
s
t
o
m
 
D
o
c
k
e
r
 
i
m
a
g
e
 
w
i
t
h
 
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
 
S
P
 
i
n
s
t
a
l
l
e
d
 
(
n
o
t
 
a
v
a
i
l
a
b
l
e
 
u
p
s
t
r
e
a
m
)
.
 
T
h
e
 
i
m
a
g
e
 
m
u
s
t
 
b
e
 
r
e
b
u
i
l
t
 
w
h
e
n
 
M
o
o
d
l
e
 
o
r
 
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
 
v
e
r
s
i
o
n
s
 
c
h
a
n
g
e
.


*
*
C
r
o
n
 
j
o
b
 
t
r
a
n
s
i
e
n
t
 
f
a
i
l
u
r
e
s
*
*
:
 
M
o
o
d
l
e
 
c
r
o
n
 
j
o
b
s
 
(
e
.
g
.
,
 
g
r
a
d
e
 
s
y
n
c
,
 
c
o
u
r
s
e
 
b
a
c
k
u
p
)
 
m
a
y
 
e
x
p
e
r
i
e
n
c
e
 
t
r
a
n
s
i
e
n
t
 
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
 
t
o
 
M
a
r
i
a
D
B
 
o
n
 
f
i
r
s
t
 
a
t
t
e
m
p
t
 
a
f
t
e
r
 
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




K
e
y
c
l
o
a
k
 
(
S
A
M
L
 
2
.
0
 
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
 
S
P
)
,
 
M
a
r
i
a
D
B
 
(
`
m
o
o
d
l
e
`
 
D
B
,
 
e
x
t
e
r
n
a
l
 
`
m
o
o
d
l
e
-
m
a
r
i
a
d
b
`
)
,
 
C
e
p
h
F
S
 
R
W
X
 
P
V
C
,
 
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
,
 
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
)
,
 
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
 
(
c
r
o
s
s
-
a
p
p
 
S
S
O
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
,
 
S
S
O
 
r
e
d
i
r
e
c
t
)
,
 
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
 
A
P
I
 
(
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
,
 
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
s
 
f
r
o
m
 
H
I
S
i
n
O
n
e
)
,
 
S
O
G
o
 
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
)
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
/
O
p
e
n
C
l
o
u
d
 
(
f
i
l
e
 
s
h
a
r
i
n
g
 
a
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
 
f
o
r
 
c
o
u
r
s
e
 
m
a
t
e
r
i
a
l
s
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
 
S
A
M
L
 
2
.
0
 
(
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
 
S
P
,
 
`
m
o
o
d
l
e
-
s
h
i
b
`
 
c
u
s
t
o
m
 
i
m
a
g
e
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
 
M
a
r
i
a
D
B
 
(
`
m
o
o
d
l
e
`
 
D
B
,
 
`
m
o
o
d
l
e
`
 
u
s
e
r
,
 
e
x
t
e
r
n
a
l
 
`
m
o
o
d
l
e
-
m
a
r
i
a
d
b
:
3
3
0
6
`
)
 
|


|
 
S
t
o
r
a
g
e
 
|
 
R
W
X
 
P
V
C
 
(
`
m
o
o
d
l
e
-
d
a
t
a
`
,
 
`
s
t
o
r
a
g
e
C
l
a
s
s
N
a
m
e
s
.
R
W
O
`
,
 
a
c
c
e
s
s
M
o
d
e
 
`
R
e
a
d
W
r
i
t
e
M
a
n
y
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
 
N
o
n
e
 
(
u
s
e
s
 
P
H
P
 
O
P
c
a
c
h
e
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
m
o
o
d
l
e
.
*
`
,
 
`
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
.
s
t
o
r
a
g
e
s
.
m
o
o
d
l
e
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
m
o
o
d
l
e
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
 
I
m
a
g
e
 
|
 
`
g
h
c
r
.
i
o
/
<
y
o
u
r
-
o
r
g
>
/
m
o
o
d
l
e
-
s
h
i
b
:
v
1
.
0
.
0
`
 
(
c
u
s
t
o
m
 
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
 
i
m
a
g
e
)
 
|


|
 
R
e
p
l
i
c
a
s
 
|
 
2
 
(
d
e
f
a
u
l
t
)
 
|


|
 
R
e
s
o
u
r
c
e
s
 
|
 
5
0
0
m
-
2
 
C
P
U
,
 
1
G
i
-
2
G
i
 
m
e
m
o
r
y
 
|


|
 
S
e
c
u
r
i
t
y
 
|
 
`
r
u
n
A
s
U
s
e
r
:
 
1
0
0
1
`
,
 
`
c
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
:
 
d
r
o
p
 
A
L
L
`
,
 
`
s
e
c
c
o
m
p
P
r
o
f
i
l
e
:
 
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
`
 
|


|
 
H
e
a
l
t
h
 
|
 
T
C
P
 
p
o
r
t
 
8
0
 
(
l
i
v
e
n
e
s
s
:
 
3
0
s
/
1
0
s
,
 
r
e
a
d
i
n
e
s
s
:
 
5
s
/
5
s
)
 
|


|
 
P
D
B
 
|
 
Y
e
s
 
(
P
o
d
D
i
s
r
u
p
t
i
o
n
B
u
d
g
e
t
)
 
|


|
 
I
n
g
r
e
s
s
 
|
 
H
A
P
r
o
x
y
,
 
2
0
0
M
 
b
o
d
y
 
s
i
z
e
,
 
3
0
0
s
 
t
i
m
e
o
u
t
 
|


|
 
V
o
l
u
m
e
 
p
e
r
m
i
s
s
i
o
n
s
 
|
 
I
n
i
t
 
c
o
n
t
a
i
n
e
r
 
w
i
t
h
 
`
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
 
H
i
g
h
 
(
w
i
d
e
l
y
-
u
s
e
d
 
L
M
S
,
 
c
r
i
t
i
c
a
l
 
f
o
r
 
c
o
u
r
s
e
 
d
e
l
i
v
e
r
y
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
5
%
 
(
3
.
6
 
h
o
u
r
s
 
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
1
s
 
(
q
u
i
z
 
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
 
|
 
P
H
P
-
F
P
M
 
r
e
s
p
o
n
s
e
 
t
i
m
e
 
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
5
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
S
O
 
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
 
a
u
t
h
)
 
|
 
K
e
y
c
l
o
a
k
 
e
v
e
n
t
 
l
o
g
 
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
 
M
o
o
d
l
e
 
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
1
%
 
f
o
r
 
1
0
 
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
 
L
o
g
i
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
 
P
H
P
-
F
P
M
 
r
e
s
p
o
n
s
e
 
t
i
m
e
 
>
2
s
 
f
o
r
 
1
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
3
 
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


-
 
C
r
o
n
 
j
o
b
 
f
a
i
l
u
r
e
s
 
(
3
+
 
c
o
n
s
e
c
u
t
i
v
e
)
 
→
 
P
3
 
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
 
1
0
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
 
u
s
e
r
s
 
(
e
x
a
m
 
p
e
r
i
o
d
s
)


-
 
5
0
,
0
0
0
 
q
u
i
z
 
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
s
 
p
e
r
 
h
o
u
r
 
(
p
e
a
k
)


-
 
1
0
0
,
0
0
0
 
c
o
u
r
s
e
 
p
a
g
e
 
v
i
e
w
s
 
p
e
r
 
h
o
u
r


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
 
2
0
 
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
 
2
0
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
 
H
i
g
h
 
(
R
P
O
:
 
3
0
 
m
i
n
,
 
R
T
O
:
 
2
 
h
o
u
r
s
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
M
a
r
i
a
D
B
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
C
o
u
r
s
e
 
f
i
l
e
s
*
*
 
(
C
e
p
h
F
S
)
:
 
D
a
i
l
y
 
s
n
a
p
s
h
o
t


-
 
*
*
M
o
o
d
l
e
 
d
a
t
a
 
d
i
r
e
c
t
o
r
y
*
*
:
 
D
a
i
l
y
 
s
n
a
p
s
h
o
t


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
 
D
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
 
(
M
a
r
i
a
D
B
)
 
-
 
2
0
 
m
i
n


2
.
 
C
e
p
h
F
S
 
c
o
u
r
s
e
 
f
i
l
e
s
 
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
 
1
5
 
m
i
n


3
.
 
M
o
o
d
l
e
 
d
a
t
a
 
d
i
r
e
c
t
o
r
y
 
r
e
s
t
o
r
e
 
-
 
1
5
 
m
i
n


4
.
 
M
o
o
d
l
e
 
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
 
(
c
u
s
t
o
m
 
D
o
c
k
e
r
 
i
m
a
g
e
)
 
-
 
1
0
 
m
i
n


5
.
 
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
 
S
P
 
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
 
5
 
m
i
n


6
.
 
C
r
o
n
 
j
o
b
 
r
e
s
u
m
p
t
i
o
n
 
-
 
5
 
m
i
n


7
.
 
P
l
u
g
i
n
 
r
e
-
i
n
s
t
a
l
l
a
t
i
o
n
 
a
n
d
 
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
 
1
5
 
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
 
c
o
u
r
s
e
 
a
c
c
e
s
s
,
 
q
u
i
z
 
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
 
-
 
1
0
 
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
 
C
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
 
a
n
d
 
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
 
U
s
e
r
 
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
s
,
 
g
r
a
d
e
s
,
 
a
n
d
 
q
u
i
z
 
a
t
t
e
m
p
t
s


-
 
F
o
r
u
m
 
p
o
s
t
s
 
a
n
d
 
c
o
l
l
a
b
o
r
a
t
i
v
e
 
c
o
n
t
e
n
t


-
 
M
o
o
d
l
e
 
d
a
t
a
 
d
i
r
e
c
t
o
r
y
 
(
c
a
c
h
e
d
 
f
i
l
e
s
,
 
t
e
m
p
 
u
p
l
o
a
d
s
)


-
 
P
l
u
g
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
s




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
C
e
p
h
F
S
 
s
t
o
r
a
g
e
 
l
o
s
s
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
 
s
n
a
p
s
h
o
t
s
,
 
v
e
r
i
f
y
 
c
o
u
r
s
e
 
m
a
t
e
r
i
a
l
 
c
h
e
c
k
s
u
m
s


-
 
*
*
C
u
s
t
o
m
 
D
o
c
k
e
r
 
i
m
a
g
e
 
b
r
o
k
e
n
*
*
:
 
R
e
b
u
i
l
d
 
i
m
a
g
e
,
 
r
e
d
e
p
l
o
y
,
 
v
e
r
i
f
y
 
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
 
+
 
f
i
l
e
s
,
 
r
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
 
S
P

