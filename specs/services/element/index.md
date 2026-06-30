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
 
E
l
e
m
e
n
t
 
(
M
a
t
r
i
x
/
S
y
n
a
p
s
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




S
e
c
u
r
e
 
i
n
s
t
a
n
t
 
m
e
s
s
a
g
i
n
g
 
p
l
a
t
f
o
r
m
 
v
i
a
 
E
l
e
m
e
n
t
 
W
e
b
 
f
r
o
n
t
e
n
d
 
a
n
d
 
S
y
n
a
p
s
e


h
o
m
e
s
e
r
v
e
r
 
(
M
a
t
r
i
x
 
p
r
o
t
o
c
o
l
)
.
 
F
e
a
t
u
r
e
s
 
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
 
v
i
a
 
K
e
y
c
l
o
a
k
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
 
S
3
 
m
e
d
i
a
 
s
t
o
r
a
g
e
,
 
R
e
d
i
s
 
f
o
r
 
a
p
p
s
e
r
v
i
c
e
 
t
r
a
n
s
a
c
t
i
o
n
s
,


T
U
R
N
 
s
e
r
v
e
r
 
f
o
r
 
W
e
b
R
T
C
 
c
a
l
l
s
,
 
I
n
t
e
r
c
o
m
/
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
e
r
v
i
c
e
s


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
 
S
S
O
,
 
a
n
d
 
N
o
r
d
e
c
k
 
w
i
d
g
e
t
s
 
f
o
r
 
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
 
w
h
i
t
e
b
o
a
r
d
,


p
o
l
l
i
n
g
,
 
a
n
d
 
v
i
d
e
o
 
c
o
n
f
e
r
e
n
c
i
n
g
.




S
y
n
a
p
s
e
 
s
u
p
p
o
r
t
s
 
o
p
t
i
o
n
a
l
 
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
 
w
i
t
h
 
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
t
r
i
x
 
h
o
m
e
s
e
r
v
e
r
s
 
a
n
d


e
n
t
e
r
p
r
i
s
e
 
f
e
a
t
u
r
e
s
 
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
d
m
i
n
/
a
u
d
i
t
 
b
o
t
 
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
 
s
e
r
v
i
c
e
s
 
a
n
d


L
D
A
P
 
g
r
o
u
p
 
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
 
E
l
e
m
e
n
t
 
W
e
b
 
+
 
S
y
n
a
p
s
e
 
M
a
t
r
i
x
 
h
o
m
e
s
e
r
v
e
r
 
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
 
v
i
a
 
K
e
y
c
l
o
a
k
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
 
S
3
 
m
e
d
i
a
 
s
t
o
r
a
g
e
,
 
R
e
d
i
s
 
a
p
p
s
e
r
v
i
c
e
 
t
r
a
n
s
a
c
t
i
o
n
s
,
 
T
U
R
N
 
s
e
r
v
e
r
 
f
o
r
 
W
e
b
R
T
C
,
 
I
n
t
e
r
c
o
m
/
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
e
r
v
i
c
e
s
,
 
N
o
r
d
e
c
k
 
w
i
d
g
e
t
s
 
(
w
h
i
t
e
b
o
a
r
d
,
 
p
o
l
l
i
n
g
)
,
 
o
p
t
i
o
n
a
l
 
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
,
 
L
D
A
P
 
g
r
o
u
p
 
s
y
n
c


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
 
V
i
d
e
o
 
c
o
n
f
e
r
e
n
c
i
n
g
 
(
s
e
e
 
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
 
o
r
 
J
i
t
s
i
)
,
 
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
)
,
 
n
a
t
i
v
e
 
m
o
b
i
l
e
 
a
p
p
s
 
(
u
s
e
 
E
l
e
m
e
n
t
 
m
o
b
i
l
e
 
c
l
i
e
n
t
s
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
 
V
i
d
e
o
 
c
o
n
f
e
r
e
n
c
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
`
 
o
r
 
`
.
.
/
j
i
t
s
i
`
)


-
 
F
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
 
v
i
a
 
K
e
y
c
l
o
a
k




E
l
e
m
e
n
t
 
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
m
a
t
r
i
x
`
.


S
y
n
a
p
s
e
 
m
a
p
s
 
O
I
D
C
 
i
d
e
n
t
i
t
y
 
t
o
 
M
a
t
r
i
x
 
u
s
e
r
 
I
D
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
 
l
o
g
s
 
i
n
 
v
i
a
 
E
l
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
i
n
g
 
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


-
 
T
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
 
M
a
t
r
i
x
 
u
s
e
r
 
I
D
 
i
s
 
f
o
r
m
a
t
t
e
d
 
a
s
 
`
@
<
o
p
e
n
d
e
s
k
_
u
s
e
r
n
a
m
e
>
:
<
d
o
m
a
i
n
>
`


-
 
A
N
D
 
O
I
D
C
 
s
c
o
p
e
s
 
i
n
c
l
u
d
e
 
`
o
p
e
n
i
d
`
 
a
n
d
 
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
m
a
t
r
i
x
-
s
c
o
p
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
 
L
o
g
o
u
t
 
r
e
d
i
r
e
c
t
 
t
o
 
p
o
r
t
a
l


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
 
l
o
g
g
i
n
g
 
o
u
t
 
o
f
 
E
l
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
 
t
h
e
 
u
s
e
r
 
i
s
 
r
e
d
i
r
e
c
t
e
d
 
t
o
 
t
h
e
 
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


-
 
A
N
D
 
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
 
s
e
s
s
i
o
n
 
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
 
O
I
D
C
 
R
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
 
l
o
g
o
u
t




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
e
a
l
-
t
i
m
e
 
m
e
s
s
a
g
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
 
m
e
s
s
a
g
e
s
 
i
n
 
r
e
a
l
-
t
i
m
e
 
v
i
a
 
t
h
e
 
M
a
t
r
i
x
 
p
r
o
t
o
c
o
l
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
e
s
s
a
g
e
 
d
e
l
i
v
e
r
y


-
 
G
I
V
E
N
 
t
w
o
 
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
s
 
i
n
 
a
 
r
o
o
m


-
 
W
H
E
N
 
u
s
e
r
 
A
 
s
e
n
d
s
 
a
 
m
e
s
s
a
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
 
m
e
s
s
a
g
e
 
i
s
 
d
e
l
i
v
e
r
e
d
 
t
h
r
o
u
g
h
 
S
y
n
a
p
s
e
 
t
o
 
u
s
e
r
 
B
 
v
i
a
 
/
s
y
n
c


-
 
A
N
D
 
E
2
E
E
 
i
s
 
e
n
a
b
l
e
d
 
(
`
e
n
d
T
o
E
n
d
E
n
c
r
y
p
t
i
o
n
:
 
t
r
u
e
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
 
W
e
b
R
T
C
 
a
u
d
i
o
/
v
i
d
e
o
 
c
a
l
l
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
 
m
a
k
e
 
1
:
1
 
a
n
d
 
g
r
o
u
p
 
a
u
d
i
o
/
v
i
d
e
o
 
c
a
l
l
s
 
v
i
a
 
W
e
b
R
T
C
 
t
h
r
o
u
g
h
 
E
l
e
m
e
n
t
,


u
s
i
n
g
 
T
U
R
N
 
s
e
r
v
e
r
s
 
f
o
r
 
N
A
T
 
t
r
a
v
e
r
s
a
l
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
 
1
:
1
 
v
i
d
e
o
 
c
a
l
l
 
w
i
t
h
 
T
U
R
N
 
r
e
l
a
y


-
 
G
I
V
E
N
 
t
w
o
 
u
s
e
r
s
 
b
e
h
i
n
d
 
N
A
T


-
 
W
H
E
N
 
o
n
e
 
u
s
e
r
 
i
n
i
t
i
a
t
e
s
 
a
 
v
i
d
e
o
 
c
a
l
l


-
 
T
H
E
N
 
W
e
b
R
T
C
 
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
 
A
N
D
 
i
f
 
d
i
r
e
c
t
 
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
s
,
 
T
U
R
N
 
r
e
l
a
y
 
i
s
 
u
s
e
d


-
 
A
N
D
 
T
U
R
N
 
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
 
f
o
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
 
I
n
t
e
r
c
o
m
 
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
 
s
e
r
v
i
c
e




S
y
n
a
p
s
e
 
S
H
A
L
L
 
i
n
t
e
g
r
a
t
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
 
a
s
 
a
n
 
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
 
s
e
r
v
i
c
e
 
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
 
S
S
O
 
a
n
d
 
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
r
c
o
m
 
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
 
S
y
n
a
p
s
e


-
 
G
I
V
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
 
s
e
r
v
i
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
e
d
 
i
n
 
S
y
n
a
p
s
e


-
 
W
H
E
N
 
a
 
c
o
n
s
u
m
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
 
(
O
X
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
)
 
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
 
A
S
 
t
o
k
e
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
s
 
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
 
t
o
 
S
y
n
a
p
s
e


-
 
A
N
D
 
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
 
J
S
O
N
 
i
s
 
s
e
r
v
e
d
 
v
i
a
 
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
 
e
n
d
p
o
i
n
t




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
 
A
p
p
S
u
i
t
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
 
s
e
r
v
i
c
e




S
y
n
a
p
s
e
 
S
H
A
L
L
 
i
n
t
e
g
r
a
t
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
s
 
a
n
 
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
 
s
e
r
v
i
c
e
 
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
 
m
e
s
s
a
g
i
n
g
 
a
n
d
 
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
 
d
e
l
i
v
e
r
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
a
t
r
i
x
 
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
 
G
I
V
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
e
r
v
i
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
e
d


-
 
T
H
E
N
 
O
X
 
c
a
n
 
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
 
M
a
t
r
i
x
 
m
e
s
s
a
g
e
s
 
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
 
u
s
e
r
s


-
 
A
N
D
 
t
h
e
 
O
X
 
s
e
n
d
e
r
 
l
o
c
a
l
p
a
r
t
 
i
s
 
`
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
o
r
d
e
c
k
 
w
i
d
g
e
t
s




E
l
e
m
e
n
t
 
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
 
N
o
r
d
e
c
k
 
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
 
w
i
d
g
e
t
s
:
 
N
e
o
B
o
a
r
d
 
(
w
h
i
t
e
b
o
a
r
d
)
,


N
e
o
C
h
o
i
c
e
 
(
p
o
l
l
s
)
,
 
a
n
d
 
N
e
o
D
a
t
e
F
i
x
 
(
m
e
e
t
i
n
g
 
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
)
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
o
B
o
a
r
d
 
w
h
i
t
e
b
o
a
r
d
 
i
n
 
r
o
o
m


-
 
G
I
V
E
N
 
a
 
r
o
o
m
 
w
i
t
h
 
t
h
e
 
N
e
o
B
o
a
r
d
 
w
i
d
g
e
t
 
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
 
W
H
E
N
 
u
s
e
r
s
 
o
p
e
n
 
t
h
e
 
w
i
d
g
e
t


-
 
T
H
E
N
 
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
 
w
h
i
t
e
b
o
a
r
d
 
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
 
w
i
d
g
e
t
 
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
 
p
r
e
-
a
p
p
r
o
v
e
d
 
f
o
r
 
t
h
e
 
s
p
e
c
i
f
i
c
 
w
i
d
g
e
t
 
U
R
L


-
 
A
N
D
 
p
r
e
l
o
a
d
i
n
g
 
i
s
 
e
n
a
b
l
e
d
 
f
o
r
 
f
a
s
t
e
r
 
w
i
d
g
e
t
 
l
o
a
d
i
n
g




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
o
C
h
o
i
c
e
 
p
o
l
l
 
i
n
 
r
o
o
m


-
 
G
I
V
E
N
 
a
 
r
o
o
m
 
w
i
t
h
 
t
h
e
 
N
e
o
C
h
o
i
c
e
 
w
i
d
g
e
t


-
 
W
H
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
e
s
 
a
 
p
o
l
l


-
 
T
H
E
N
 
a
l
l
 
r
o
o
m
 
m
e
m
b
e
r
s
 
c
a
n
 
v
o
t
e


-
 
A
N
D
 
p
o
l
l
 
r
e
s
u
l
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
 
i
n
 
r
e
a
l
-
t
i
m
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
 
R
a
t
e
 
l
i
m
i
t
i
n
g




S
y
n
a
p
s
e
 
S
H
A
L
L
 
e
n
f
o
r
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
 
o
n
 
l
o
g
i
n
,
 
m
e
s
s
a
g
e
,
 
a
n
d
 
m
e
d
i
a
 
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


t
o
 
p
r
e
v
e
n
t
 
a
b
u
s
e
,
 
w
i
t
h
 
e
l
e
v
a
t
e
d
 
l
i
m
i
t
s
 
f
o
r
 
w
i
d
g
e
t
-
h
e
a
v
y
 
u
s
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
 
L
o
g
i
n
 
r
a
t
e
 
l
i
m
i
t
i
n
g


-
 
G
I
V
E
N
 
t
h
e
 
`
r
c
_
l
o
g
i
n
`
 
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
 
l
o
g
i
n
 
a
t
t
e
m
p
t
s
 
a
r
e
 
l
i
m
i
t
e
d
 
t
o
 
2
/
s
e
c
o
n
d
 
w
i
t
h
 
b
u
r
s
t
 
o
f
 
8


-
 
A
N
D
 
a
d
d
r
e
s
s
-
b
a
s
e
d
 
r
a
t
e
 
l
i
m
i
t
 
i
s
 
2
/
s
e
c
o
n
d
 
w
i
t
h
 
b
u
r
s
t
 
o
f
 
1
2




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
s
s
a
g
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
i
n
g
 
(
e
l
e
v
a
t
e
d
 
f
o
r
 
w
i
d
g
e
t
s
)


-
 
G
I
V
E
N
 
`
r
c
_
m
e
s
s
a
g
e
`
 
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
 
m
e
s
s
a
g
e
s
 
a
r
e
 
l
i
m
i
t
e
d
 
t
o
 
5
/
s
e
c
o
n
d
 
w
i
t
h
 
b
u
r
s
t
 
o
f
 
2
5


-
 
A
N
D
 
m
e
d
i
a
 
c
r
e
a
t
i
o
n
 
i
s
 
l
i
m
i
t
e
d
 
t
o
 
2
0
/
s
e
c
o
n
d
 
w
i
t
h
 
b
u
r
s
t
 
o
f
 
1
0
0


-
 
A
N
D
 
I
n
t
e
r
c
o
m
 
a
n
d
 
O
X
 
A
S
 
p
i
p
e
s
 
a
r
e
 
N
O
T
 
r
a
t
e
-
l
i
m
i
t
e
d
 
(
`
r
a
t
e
_
l
i
m
i
t
e
d
:
 
f
a
l
s
e
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
 
U
s
e
r
 
d
i
r
e
c
t
o
r
y
 
s
e
a
r
c
h




S
y
n
a
p
s
e
 
S
H
A
L
L
 
a
l
l
o
w
 
a
l
l
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
d
-
u
s
e
r
s
 
t
o
 
s
e
a
r
c
h
 
t
h
e
 
u
s
e
r
 
d
i
r
e
c
t
o
r
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
 
U
s
e
r
 
s
e
a
r
c
h
e
s
 
f
o
r
 
o
t
h
e
r
 
u
s
e
r
s


-
 
G
I
V
E
N
 
`
u
s
e
r
_
d
i
r
e
c
t
o
r
y
.
s
e
a
r
c
h
_
a
l
l
_
u
s
e
r
s
:
 
t
r
u
e
`


-
 
W
H
E
N
 
a
 
u
s
e
r
 
s
e
a
r
c
h
e
s
 
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


-
 
T
H
E
N
 
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
 
u
s
e
r
s
 
a
r
e
 
s
e
a
r
c
h
a
b
l
e
 
b
y
 
d
i
s
p
l
a
y
 
n
a
m
e
 
o
r
 
M
a
t
r
i
x
 
I
D




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
 
F
e
d
e
r
a
t
i
o
n
 
(
o
p
t
i
o
n
a
l
)




S
y
n
a
p
s
e
 
M
A
Y
 
s
u
p
p
o
r
t
 
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
 
w
i
t
h
 
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
t
r
i
x
 
h
o
m
e
s
e
r
v
e
r
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
 
F
e
d
e
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


-
 
T
H
E
N
 
S
y
n
a
p
s
e
 
l
i
s
t
e
n
s
 
o
n
 
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
 
i
n
g
r
e
s
s


-
 
A
N
D
 
o
n
l
y
 
d
o
m
a
i
n
s
 
i
n
 
`
d
o
m
a
i
n
A
l
l
o
w
L
i
s
t
`
 
c
a
n
 
f
e
d
e
r
a
t
e


-
 
A
N
D
 
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
 
u
s
e
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
 
(
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
s
y
n
a
p
s
e
-
t
l
s
`
)




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
S
3
 
O
b
j
e
c
t
 
S
t
o
r
a
g
e
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
s
3
-
o
b
j
e
c
t
-
s
t
o
r
a
g
e
)
 
—
 
f
i
l
e
/
m
e
d
i
a
 
s
t
o
r
a
g
e


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
 
S
S
O
 
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
y
n
a
p
s
e
 
(
M
a
t
r
i
x
)
 
|
 
1
0
0
1
 
(
e
l
e
m
e
n
t
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
y
n
a
p
s
e
 
s
l
o
w
 
s
t
a
r
t
*
*
:
 
M
a
t
r
i
x
 
S
y
n
a
p
s
e
 
t
a
k
e
s
 
3
0
-
6
0
 
s
e
c
o
n
d
s
 
t
o
 
s
t
a
r
t
 
(
r
o
o
m
 
s
t
a
t
e
 
l
o
a
d
i
n
g
)
.
 
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
s
 
m
u
s
t
 
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
 
t
h
i
s
 
s
t
a
r
t
u
p
 
t
i
m
e
.


*
*
T
U
R
N
 
s
e
r
v
e
r
*
*
:
 
W
e
b
R
T
C
 
c
a
l
l
s
 
r
e
q
u
i
r
e
 
a
 
T
U
R
N
 
s
e
r
v
e
r
 
f
o
r
 
N
A
T
 
t
r
a
v
e
r
s
a
l
.
 
I
f
 
T
U
R
N
 
i
s
 
u
n
a
v
a
i
l
a
b
l
e
,
 
u
s
e
r
s
 
b
e
h
i
n
d
 
s
y
m
m
e
t
r
i
c
 
N
A
T
s
 
c
a
n
n
o
t
 
e
s
t
a
b
l
i
s
h
 
c
a
l
l
s
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
O
I
D
C
,
 
c
l
i
e
n
t
:
 
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
m
a
t
r
i
x
`
)
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
 
(
`
s
y
n
a
p
s
e
`
 
D
B
)
,
 
M
i
n
I
O
/
S
3
 
(
m
e
d
i
a
)
,
 
R
e
d
i
s
 
(
a
p
p
s
e
r
v
i
c
e
 
t
r
a
n
s
a
c
t
i
o
n
s
)
,
 
P
o
s
t
f
i
x
 
(
e
m
a
i
l
 
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
)
,
 
T
U
R
N
 
s
e
r
v
e
r
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
,
 
l
o
g
o
u
t
 
r
e
d
i
r
e
c
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
 
A
S
 
p
i
p
e
)
,
 
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
e
s
s
a
g
i
n
g
 
A
S
 
p
i
p
e
)
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
,
 
w
e
l
c
o
m
e
 
b
o
t
,
 
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
 
C
S
S
 
t
h
e
m
e
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
)
,
 
N
o
r
d
e
c
k
 
w
i
d
g
e
t
s
 
(
w
h
i
t
e
b
o
a
r
d
,
 
p
o
l
l
s
,
 
m
e
e
t
i
n
g
 
s
c
h
e
d
u
l
e
r
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
o
p
e
n
d
e
s
k
-
m
a
t
r
i
x
`
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
y
n
a
p
s
e
`
 
D
B
,
 
`
s
y
n
a
p
s
e
`
 
u
s
e
r
,
 
R
W
O
 
P
V
C
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
 
S
3
/
M
i
n
I
O
 
(
m
e
d
i
a
 
f
i
l
e
s
,
 
a
t
t
a
c
h
m
e
n
t
s
)
 
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
a
p
p
s
e
r
v
i
c
e
 
t
r
a
n
s
a
c
t
i
o
n
s
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
 
A
G
P
L
-
3
.
0
 
(
E
l
e
m
e
n
t
)
 
/
 
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
S
y
n
a
p
s
e
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
y
n
a
p
s
e
.
*
`
,
 
`
s
e
c
r
e
t
s
.
i
n
t
e
r
c
o
m
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
-
s
y
n
a
p
s
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


|
 
C
h
a
r
t
 
|
 
U
p
s
t
r
e
a
m
 
E
l
e
m
e
n
t
 
+
 
S
y
n
a
p
s
e
 
(
O
C
I
:
 
`
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
`
)
 
|


|
 
S
y
n
a
p
s
e
 
i
m
a
g
e
 
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
9
9
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
9
9
1
`
,
 
`
r
e
a
d
O
n
l
y
R
o
o
t
F
i
l
e
s
y
s
t
e
m
:
 
t
r
u
e
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
 
i
m
a
g
e
 
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
1
`
,
 
`
r
e
a
d
O
n
l
y
R
o
o
t
F
i
l
e
s
y
s
t
e
m
:
 
t
r
u
e
`
 
|


|
 
M
a
t
r
i
x
 
d
o
m
a
i
n
 
|
 
`
g
l
o
b
a
l
.
m
a
t
r
i
x
D
o
m
a
i
n
`
 
o
r
 
`
g
l
o
b
a
l
.
d
o
m
a
i
n
`
 
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
 
`
r
e
p
l
i
c
a
s
.
s
y
n
a
p
s
e
`
 
(
1
 
d
e
f
a
u
l
t
)
,
 
`
r
e
p
l
i
c
a
s
.
e
l
e
m
e
n
t
`
 
|


|
 
A
p
p
 
S
e
r
v
i
c
e
s
 
|
 
I
n
t
e
r
c
o
m
 
(
`
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
e
r
v
i
c
e
`
)
,
 
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
`
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
 
|


|
 
E
n
t
e
r
p
r
i
s
e
 
A
S
 
|
 
A
d
m
i
n
B
o
t
,
 
A
u
d
i
t
B
o
t
 
(
p
i
p
e
s
 
o
n
 
p
o
r
t
 
9
9
9
5
)
,
 
G
r
o
u
p
S
y
n
c
 
(
p
o
r
t
 
1
0
0
1
0
)
 
|


|
 
P
r
e
s
e
n
c
e
 
|
 
C
o
n
f
i
g
u
r
a
b
l
e
 
(
`
f
u
n
c
t
i
o
n
a
l
.
d
a
t
a
P
r
o
t
e
c
t
i
o
n
.
m
a
t
r
i
x
P
r
e
s
e
n
c
e
.
e
n
a
b
l
e
d
`
)
 
|


|
 
T
h
e
m
e
 
|
 
`
t
i
t
l
e
:
 
"
C
h
a
t
 
-
 
<
p
r
o
d
u
c
t
N
a
m
e
>
"
`
,
 
p
r
i
m
a
r
y
 
c
o
l
o
r
 
C
S
S
 
v
a
r
i
a
b
l
e
s
 
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
 
B
o
t
h
:
 
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
i
m
p
o
r
t
a
n
t
 
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
 
t
o
o
l
,
 
b
u
t
 
n
o
t
 
c
r
i
t
i
c
a
l
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
3
0
0
m
s
 
(
m
e
s
s
a
g
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
 
S
y
n
a
p
s
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
8
%
 
(
W
e
b
S
o
c
k
e
t
)
 
|
 
S
y
n
a
p
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
 
l
o
g
s
 
|


|
 
*
*
M
e
s
s
a
g
e
 
D
e
l
i
v
e
r
y
*
*
 
|
 
>
9
9
%
 
(
w
i
t
h
i
n
 
5
 
s
e
c
o
n
d
s
)
 
|
 
F
e
d
e
r
a
t
i
o
n
/
s
e
n
d
 
q
u
e
u
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
F
e
d
e
r
a
t
i
o
n
 
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
5
%
 
(
e
x
t
e
r
n
a
l
 
h
o
m
e
s
e
r
v
e
r
s
)
 
|
 
F
e
d
e
r
a
t
i
o
n
 
t
r
a
n
s
a
c
t
i
o
n
 
l
o
g
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
y
n
a
p
s
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
 
W
e
b
S
o
c
k
e
t
 
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
 
M
e
s
s
a
g
e
 
d
e
l
i
v
e
r
y
 
d
e
l
a
y
 
>
1
0
s
 
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
2
 
a
l
e
r
t


-
 
F
e
d
e
r
a
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
1
0
%
 
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
 
T
U
R
N
 
s
e
r
v
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
 
c
o
n
n
e
c
t
e
d
 
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
 
m
e
s
s
a
g
e
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
)


-
 
1
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
 
v
o
i
c
e
/
v
i
d
e
o
 
c
a
l
l
s
 
(
T
U
R
N
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


-
 
S
3
 
m
e
d
i
a
 
s
t
o
r
a
g
e
:
 
5
0
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
 
5
 
T
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
 
1
 
h
o
u
r
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
S
3
 
m
e
d
i
a
 
s
t
o
r
a
g
e
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
,
 
3
0
-
d
a
y
 
r
e
t
e
n
t
i
o
n


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
 
(
h
o
m
e
s
e
r
v
e
r
.
y
a
m
l
,
 
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
 
d
e
l
e
g
a
t
i
o
n
)


-
 
*
*
S
i
g
n
i
n
g
 
k
e
y
s
*
*
:
 
E
n
c
r
y
p
t
e
d
 
b
a
c
k
u
p
 
w
i
t
h
 
q
u
a
r
t
e
r
l
y
 
r
o
t
a
t
i
o
n




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
 
2
0
 
m
i
n


2
.
 
S
3
 
m
e
d
i
a
 
s
t
o
r
a
g
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
 
-
 
1
5
 
m
i
n


3
.
 
S
y
n
a
p
s
e
 
h
o
m
e
s
e
r
v
e
r
 
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
 
1
5
 
m
i
n


4
.
 
E
l
e
m
e
n
t
 
W
e
b
 
f
r
o
n
t
e
n
d
 
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


5
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
 
5
 
m
i
n


6
.
 
F
e
d
e
r
a
t
i
o
n
 
s
i
g
n
i
n
g
 
k
e
y
 
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


7
.
 
W
e
l
l
-
k
n
o
w
n
 
d
e
l
e
g
a
t
i
o
n
 
D
N
S
 
c
h
e
c
k
 
-
 
3
 
m
i
n


8
.
 
T
U
R
N
 
s
e
r
v
e
r
 
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
 
t
e
s
t
 
-
 
5
 
m
i
n


9
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
 
m
e
s
s
a
g
e
,
 
j
o
i
n
 
r
o
o
m
)
 
-
 
1
0
 
m
i
n


1
0
.
 
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
 
r
e
s
t
o
r
a
t
i
o
n
 
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
 
U
s
e
r
 
a
c
c
o
u
n
t
s
 
a
n
d
 
d
e
v
i
c
e
 
l
i
s
t
s


-
 
R
o
o
m
 
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
 
a
n
d
 
m
e
t
a
d
a
t
a


-
 
M
e
s
s
a
g
e
 
h
i
s
t
o
r
y
 
(
e
n
c
r
y
p
t
e
d
)


-
 
M
e
d
i
a
 
u
p
l
o
a
d
s
 
(
S
3
)


-
 
S
i
g
n
i
n
g
 
k
e
y
s
 
(
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
 
t
r
u
s
t
)




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
 
m
e
s
s
a
g
e
 
h
i
s
t
o
r
y
 
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
S
3
 
m
e
d
i
a
 
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
,
 
v
e
r
i
f
y
 
m
e
d
i
a
 
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
S
i
g
n
i
n
g
 
k
e
y
 
l
o
s
s
*
*
:
 
C
R
I
T
I
C
A
L
 
-
 
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
 
t
r
u
s
t
 
b
r
o
k
e
n
,
 
c
o
o
r
d
i
n
a
t
e
 
w
i
t
h
 
o
t
h
e
r
 
h
o
m
e
s
e
r
v
e
r
s


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
 
m
e
d
i
a
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
,
 
v
e
r
i
f
y
 
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

