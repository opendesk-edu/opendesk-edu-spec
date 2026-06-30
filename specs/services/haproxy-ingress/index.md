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
r
i
m
a
r
y
 
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
 
R
o
u
t
e
s
 
e
x
t
e
r
n
a
l


H
T
T
P
S
 
t
r
a
f
f
i
c
 
t
o
 
b
a
c
k
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
 
b
a
s
e
d
 
o
n
 
h
o
s
t
 
h
e
a
d
e
r
s
,
 
p
e
r
f
o
r
m
s
 
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
 
a
n
d
 
p
r
o
v
i
d
e
s
 
H
T
T
P
/
S
 
p
r
o
x
y
 
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
i
t
y
.




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
 
i
s
 
t
h
e
 
d
e
f
a
u
l
t
 
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
 
(
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
)
 
f
o
r


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
e
r
v
i
c
e
s
.
 
A
n
 
`
i
n
g
r
e
s
s
-
n
g
i
n
x
`
 
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
 
c
o
e
x
i
s
t
s
 
b
u
t
 
i
s
 
o
n
l
y
 
u
s
e
d


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
 
r
e
q
u
i
r
i
n
g
 
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
 
n
g
i
n
x
`
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
 
h
o
s
t
-
b
a
s
e
d
 
r
o
u
t
i
n
g
,
 
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
 
p
e
r
-
s
e
r
v
i
c
e
 
t
i
m
e
o
u
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
,
 
s
n
i
p
p
e
t
 
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
u
p
p
o
r
t
,
 
l
a
r
g
e
 
h
e
a
d
e
r
 
s
u
p
p
o
r
t
,
 
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
 
r
o
u
t
i
n
g
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
 
v
i
a
 
`
h
a
p
r
o
x
y
_
e
x
p
o
r
t
e
r
`


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
 
n
g
i
n
x
-
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
 
(
o
n
l
y
 
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
 
f
o
r
 
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
 
i
s
s
u
e
s
)
,
 
s
e
r
v
i
c
e
 
m
e
s
h
 
(
I
s
t
i
o
/
L
i
n
k
e
r
d
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
 
c
l
u
s
t
e
r
 
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
 
(
C
o
r
e
D
N
S
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
 
n
g
i
n
x
-
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
m
i
n
i
m
a
l
 
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
,
 
s
e
e
 
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
)


-
 
S
e
r
v
i
c
e
 
m
e
s
h
 
o
r
 
e
a
s
t
-
w
e
s
t
 
t
r
a
f
f
i
c
 
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
 
D
D
o
S
 
p
r
o
t
e
c
t
i
o
n
 
(
H
R
Z
 
n
e
t
w
o
r
k
-
l
e
v
e
l
 
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
)


-
 
W
A
F
 
(
W
e
b
 
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
 
F
i
r
e
w
a
l
l
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
 
H
o
s
t
-
b
a
s
e
d
 
H
T
T
P
S
 
r
o
u
t
i
n
g




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
 
S
H
A
L
L
 
r
o
u
t
e
 
e
x
t
e
r
n
a
l
 
H
T
T
P
S
 
t
r
a
f
f
i
c
 
t
o
 
b
a
c
k
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
 
`
H
o
s
t
`
 
h
e
a
d
e
r
,
 
w
i
t
h
 
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
 
a
t
 
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
 
r
o
u
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
 
a
 
h
o
s
t
 
r
u
l
e


 
 
f
o
r
 
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


-
 
W
H
E
N
 
a
n
 
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
 
a
r
r
i
v
e
s
 
m
a
t
c
h
i
n
g
 
t
h
e
 
h
o
s
t
 
h
e
a
d
e
r


-
 
T
H
E
N
 
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
 
t
h
e
 
N
e
x
t
c
l
o
u
d
 
b
a
c
k
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
 
a
t
 
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
 
(
b
a
c
k
e
n
d
 
r
e
c
e
i
v
e
s
 
H
T
T
P
)


-
 
A
N
D
 
t
h
e
 
b
a
c
k
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
 
r
e
s
p
o
n
d
s
 
w
i
t
h
 
t
h
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
 
c
o
n
t
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
 
D
e
f
a
u
l
t
 
t
i
m
e
o
u
t


-
 
G
I
V
E
N
 
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
o
u
t
 
e
x
p
l
i
c
i
t
 
t
i
m
e
o
u
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


-
 
W
H
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
 
i
s
 
p
r
o
x
i
e
d
 
t
o
 
t
h
e
 
b
a
c
k
e
n
d


-
 
T
H
E
N
 
H
A
P
r
o
x
y
 
u
s
e
s
 
t
h
e
 
d
e
f
a
u
l
t
 
b
o
d
y
 
t
i
m
e
o
u
t
 
o
f
 
1
0
0
 
s
e
c
o
n
d
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
 
P
e
r
-
s
e
r
v
i
c
e
 
t
i
m
e
o
u
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
 
p
e
r
-
s
e
r
v
i
c
e
 
t
i
m
e
o
u
t
 
o
v
e
r
r
i
d
e
s
 
f
o
r
 
l
o
n
g
-
r
u
n
n
i
n
g


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
x
t
e
n
d
e
d
 
t
i
m
e
o
u
t
 
f
o
r
 
C
o
l
l
a
b
o
r
a


-
 
G
I
V
E
N
 
C
o
l
l
a
b
o
r
a
 
I
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
 
e
x
t
e
n
d
e
d
 
t
i
m
e
o
u
t


-
 
W
H
E
N
 
a
 
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
i
t
i
n
g
 
s
e
s
s
i
o
n
 
i
s
 
a
c
t
i
v
e


-
 
T
H
E
N
 
H
A
P
r
o
x
y
 
u
s
e
s
 
a
 
6
0
0
-
s
e
c
o
n
d
 
b
o
d
y
 
t
i
m
e
o
u
t
 
(
l
o
n
g
 
d
o
c
u
m
e
n
t
 
p
r
o
c
e
s
s
i
n
g
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
 
n
o
t
 
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
 
p
r
e
m
a
t
u
r
e
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
 
E
x
t
e
n
d
e
d
 
t
i
m
e
o
u
t
 
f
o
r
 
J
i
t
s
i


-
 
G
I
V
E
N
 
J
i
t
s
i
 
I
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
 
e
x
t
e
n
d
e
d
 
t
i
m
e
o
u
t


-
 
W
H
E
N
 
a
 
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
e
 
i
s
 
i
n
 
p
r
o
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
 
H
A
P
r
o
x
y
 
u
s
e
s
 
a
 
3
6
0
0
-
s
e
c
o
n
d
 
t
i
m
e
o
u
t
 
(
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


-
 
A
N
D
 
t
h
e
 
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
 
p
e
r
s
i
s
t
s
 
f
o
r
 
t
h
e
 
d
u
r
a
t
i
o
n
 
o
f
 
t
h
e
 
m
e
e
t
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
 
E
x
t
e
n
d
e
d
 
t
i
m
e
o
u
t
 
f
o
r
 
N
o
t
e
s
 
Y
-
P
r
o
v
i
d
e
r


-
 
G
I
V
E
N
 
N
o
t
e
s
 
Y
-
P
r
o
v
i
d
e
r
 
I
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
 
e
x
t
e
n
d
e
d
 
t
i
m
e
o
u
t


-
 
W
H
E
N
 
Y
.
j
s
 
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
s
 
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
 
T
H
E
N
 
H
A
P
r
o
x
y
 
u
s
e
s
 
a
n
 
8
6
4
0
0
-
s
e
c
o
n
d
 
t
i
m
e
o
u
t
 
(
2
4
h
 
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
n
i
p
p
e
t
 
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
 
e
n
a
b
l
e
d




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
 
s
n
i
p
p
e
t
 
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
 
r
e
q
u
i
r
e


c
u
s
t
o
m
 
H
A
P
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
 
w
i
t
h
 
c
u
s
t
o
m
 
H
A
P
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


-
 
G
I
V
E
N
 
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
 
H
A
P
r
o
x
y
 
s
n
i
p
p
e
t
 
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


-
 
W
H
E
N
 
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
 
I
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
a
l
l
o
w
S
n
i
p
p
e
t
A
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
=
t
r
u
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
 
o
n
 
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


-
 
A
N
D
 
`
a
d
m
i
s
s
i
o
n
W
e
b
h
o
o
k
s
.
a
l
l
o
w
S
n
i
p
p
e
t
A
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
=
t
r
u
e
`
 
i
s
 
a
l
s
o
 
e
n
a
b
l
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
n
i
p
p
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
 
t
o
 
t
h
e
 
H
A
P
r
o
x
y
 
b
a
c
k
e
n
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
 
L
a
r
g
e
 
h
e
a
d
e
r
 
s
u
p
p
o
r
t




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
 
H
T
T
P
 
r
e
q
u
e
s
t
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
 
h
e
a
d
e
r
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
j
e
c
t
i
n
g
 
t
h
e
m
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
D
M
 
R
E
S
T
 
A
P
I
 
l
a
r
g
e
 
h
e
a
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
 
U
M
S
 
R
E
S
T
 
A
P
I
 
w
i
t
h
 
l
a
r
g
e
 
H
T
T
P
 
h
e
a
d
e
r
s


-
 
W
H
E
N
 
H
A
P
r
o
x
y
 
r
e
c
e
i
v
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


-
 
T
H
E
N
 
H
A
P
r
o
x
y
 
p
r
o
c
e
s
s
e
s
 
i
t
 
w
i
t
h
 
`
t
u
n
e
.
b
u
f
s
i
z
e
 
6
5
5
3
6
`
 
a
n
d
 
`
t
u
n
e
.
h
t
t
p
.
m
a
x
h
d
r
 
2
5
6
`


-
 
A
N
D
 
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
s
 
N
O
T
 
r
e
j
e
c
t
e
d
 
w
i
t
h
 
`
4
3
1
 
R
e
q
u
e
s
t
 
H
e
a
d
e
r
 
F
i
e
l
d
s
 
T
o
o
 
L
a
r
g
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
 
r
o
u
t
i
n
g




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
 
S
H
A
L
L
 
r
o
u
t
e
 
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
 
r
e
q
u
e
s
t
s
 
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
 
c
h
a
l
l
e
n
g
e


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
 
r
e
q
u
e
s
t
i
n
g
 
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
 
v
i
a
 
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


-
 
W
H
E
N
 
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
 
s
e
n
d
s
 
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


-
 
T
H
E
N
 
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


-
 
A
N
D
 
t
h
e
 
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
s
p
o
n
s
e
 
i
s
 
r
e
t
u
r
n
e
d


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
 
i
s
s
u
e
d




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
 
R
e
p
l
i
c
a
s
 
|
 
N
o
t
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
 
L
7
 
p
r
o
x
y
,
 
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
 
r
o
u
t
i
n
g
 
|
 
2
+
 
|
 
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
 
|


|
 
h
a
p
r
o
x
y
_
e
x
p
o
r
t
e
r
 
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
 
m
e
t
r
i
c
s
 
e
x
p
o
r
t
e
r
 
|
 
S
i
d
e
c
a
r
 
|
 
P
o
r
t
 
1
0
2
5
4
 
|




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
 
1
0
0
1
 
|
 
N
E
T
_
B
I
N
D
_
S
E
R
V
I
C
E
 
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
 
E
x
t
e
r
n
a
l
 
I
P
 
|
 
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
 
(
s
h
a
r
e
d
 
w
i
t
h
 
i
n
g
r
e
s
s
-
n
g
i
n
x
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
 
c
l
a
s
s
 
|
 
`
h
a
p
r
o
x
y
`
 
(
d
e
f
a
u
l
t
 
f
o
r
 
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
)
 
|


|
 
D
e
f
a
u
l
t
 
t
i
m
e
o
u
t
 
|
 
1
0
0
s
 
b
o
d
y
 
t
i
m
e
o
u
t
 
|


|
 
L
a
r
g
e
 
h
e
a
d
e
r
s
 
|
 
`
t
u
n
e
.
b
u
f
s
i
z
e
 
6
5
5
3
6
`
,
 
`
t
u
n
e
.
h
t
t
p
.
m
a
x
h
d
r
 
2
5
6
`
 
|


|
 
S
n
i
p
p
e
t
 
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
 
|
 
`
a
l
l
o
w
S
n
i
p
p
e
t
A
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
=
t
r
u
e
`
 
|


|
 
M
e
t
r
i
c
s
 
p
o
r
t
 
|
 
1
0
2
5
4
 
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
 
s
e
r
v
i
c
e
 
I
n
g
r
e
s
s
e
s
)
 
|




#
#
 
P
e
r
-
S
e
r
v
i
c
e
 
T
i
m
e
o
u
t
 
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




|
 
S
e
r
v
i
c
e
 
|
 
T
i
m
e
o
u
t
 
(
s
)
 
|
 
R
e
a
s
o
n
 
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
o
l
l
a
b
o
r
a
 
|
 
6
0
0
 
|
 
L
o
n
g
 
d
o
c
u
m
e
n
t
 
p
r
o
c
e
s
s
i
n
g
 
|


|
 
J
i
t
s
i
 
|
 
3
6
0
0
 
|
 
L
o
n
g
-
l
i
v
e
d
 
W
e
b
S
o
c
k
e
t
 
d
u
r
i
n
g
 
m
e
e
t
i
n
g
s
 
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
 
6
0
0
 
|
 
L
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
 
|


|
 
N
o
t
e
s
 
Y
-
P
r
o
v
i
d
e
r
 
|
 
8
6
4
0
0
 
|
 
L
o
n
g
-
l
i
v
e
d
 
Y
.
j
s
 
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
s
 
|


|
 
A
l
l
 
o
t
h
e
r
s
 
|
 
1
0
0
 
|
 
D
e
f
a
u
l
t
 
b
o
d
y
 
t
i
m
e
o
u
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




#
#
#
 
i
n
g
r
e
s
s
-
n
g
i
n
x
 
a
n
d
 
H
A
P
r
o
x
y
 
s
h
a
r
e
 
e
x
t
e
r
n
a
l
 
I
P




B
o
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
-
n
g
i
n
x
`
 
a
n
d
 
`
h
a
p
r
o
x
y
`
 
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
s
 
a
r
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
 
I
P
 
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
.
 
T
h
e
 
n
g
i
n
x
-
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
 
d
o
e
s
 
N
O
T
 
p
r
o
c
e
s
s
 
a
l
l


i
n
g
r
e
s
s
e
s
 
—
 
o
n
l
y
 
t
h
o
s
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
 
n
g
i
n
x
`
.
 
M
o
s
t
 
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
 
m
i
s
m
a
t
c
h


-
 
G
I
V
E
N
 
a
 
s
e
r
v
i
c
e
 
I
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
 
n
g
i
n
x
`


-
 
W
H
E
N
 
t
h
e
 
n
g
i
n
x
 
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
 
d
o
e
s
 
n
o
t
 
h
a
v
e
 
t
h
e
 
m
a
t
c
h
i
n
g
 
h
o
s
t
 
r
u
l
e


-
 
T
H
E
N
 
t
r
a
f
f
i
c
 
t
o
 
t
h
a
t
 
h
o
s
t
 
i
s
 
N
O
T
 
r
o
u
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
 
u
s
e
 
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
 
i
n
s
t
e
a
d




#
#
#
 
P
l
a
n
k
a
 
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
 
c
o
n
f
l
i
c
t




T
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
 
P
l
a
n
k
a
 
c
h
a
r
t
 
s
e
t
s
 
`
k
u
b
e
r
n
e
t
e
s
.
i
o
/
i
n
g
r
e
s
s
.
c
l
a
s
s
:
 
n
g
i
n
x
`
 
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


i
n
 
`
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
`
.
 
W
h
e
n
 
u
s
i
n
g
 
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
,
 
t
h
i
s
 
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
 
M
U
S
T
 
b
e
 
r
e
m
o
v
e
d
,


k
e
e
p
i
n
g
 
o
n
l
y
 
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
.




#
#
#
 
N
e
x
t
c
l
o
u
d
 
A
I
O
 
p
r
o
b
e
 
t
i
m
i
n
g




N
e
x
t
c
l
o
u
d
 
A
I
O
 
u
s
e
s
 
`
i
n
i
t
i
a
l
D
e
l
a
y
S
e
c
o
n
d
s
`
 
i
n
s
t
e
a
d
 
o
f
 
`
p
e
r
i
o
d
S
e
c
o
n
d
s
`
 
f
o
r


r
e
a
d
i
n
e
s
s
/
s
t
a
r
t
u
p
 
p
r
o
b
e
s
,
 
c
a
u
s
i
n
g
 
1
0
x
 
P
H
P
-
F
P
M
 
l
o
a
d
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
 
a
n
d
 
c
h
a
r
t


t
e
m
p
l
a
t
e
 
S
H
A
L
L
 
b
e
 
p
a
t
c
h
e
d
 
t
o
 
u
s
e
 
`
p
e
r
i
o
d
S
e
c
o
n
d
s
`
.




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
 
i
s
 
t
h
e
 
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
 
a
n
d
 
r
o
u
t
i
n
g
 
l
a
y
e
r
 
f
o
r
 
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
 
E
v
e
r
y
 
c
o
n
t
r
a
c
t
 
l
i
s
t
e
d
 
b
e
l
o
w
 
i
s
 
p
r
o
x
i
e
d
 
t
h
r
o
u
g
h
 
H
A
P
r
o
x
y
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
 
r
o
u
t
e
s
 
`
P
O
S
T
 
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
`
 
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
 
r
o
u
t
e
s
 
S
A
M
L
 
A
u
t
h
n
R
e
q
u
e
s
t
/
S
A
M
L
R
e
s
p
o
n
s
e
 
t
o
/
f
r
o
m
 
K
e
y
c
l
o
a
k


-
 
[
S
A
M
L
 
P
O
S
T
 
M
e
t
a
d
a
t
a
 
(
D
F
N
-
A
A
I
)
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
a
m
l
-
p
o
s
t
-
m
e
t
a
d
a
t
a
-
d
f
n
-
a
a
i
-
i
d
p
-
r
e
g
i
s
t
r
a
t
i
o
n
)
 
—
 
r
o
u
t
e
s
 
D
F
N
-
A
A
I
 
m
e
t
a
d
a
t
a
 
e
n
d
p
o
i
n
t
 
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
 
r
o
u
t
e
s
 
`
P
O
S
T
 
/
a
p
i
/
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
`
 
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


-
 
[
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
 
r
o
u
t
e
s
 
`
G
E
T
 
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
 
t
o
 
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
 
[
W
O
P
I
 
D
i
s
c
o
v
e
r
y
 
+
 
C
h
e
c
k
F
i
l
e
I
n
f
o
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
w
o
p
i
-
d
i
s
c
o
v
e
r
y
-
a
n
d
-
c
h
e
c
k
f
i
l
e
i
n
f
o
)
 
—
 
r
o
u
t
e
s
 
W
O
P
I
 
r
e
q
u
e
s
t
s
 
t
o
 
C
o
l
l
a
b
o
r
a
 
(
6
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
)


-
 
[
B
B
B
 
G
r
e
e
n
l
i
g
h
t
 
R
o
o
m
 
A
P
I
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
b
b
b
-
g
r
e
e
n
l
i
g
h
t
-
r
o
o
m
-
a
p
i
)
 
—
 
r
o
u
t
e
s
 
`
P
O
S
T
 
/
a
p
i
/
c
r
e
a
t
e
`
 
t
o
 
B
B
B
 
(
1
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
)


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
 
N
O
T
 
p
r
o
x
i
e
d
 
(
i
n
t
e
r
n
a
l
 
L
D
A
P
,
 
n
o
 
i
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
)


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
 
N
O
T
 
p
r
o
x
i
e
d
 
(
i
n
t
e
r
n
a
l
 
M
i
n
I
O
 
a
t
 
`
h
t
t
p
:
/
/
m
i
n
i
o
:
9
0
0
0
`
)


-
 
[
C
l
a
m
A
V
 
I
C
A
P
 
S
c
a
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
c
l
a
m
a
v
-
i
c
a
p
-
s
c
a
n
)
 
—
 
N
O
T
 
p
r
o
x
i
e
d
 
(
i
n
t
e
r
n
a
l
 
I
C
A
P
 
p
r
o
t
o
c
o
l
)


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
 
N
O
T
 
p
r
o
x
i
e
d
 
(
i
n
t
e
r
n
a
l
 
I
M
A
P
,
 
n
o
 
i
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
)


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
 
S
u
b
m
i
s
s
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
 
N
O
T
 
p
r
o
x
i
e
d
 
(
i
n
t
e
r
n
a
l
 
S
M
T
P
,
 
n
o
 
i
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
)


-
 
[
N
o
t
i
f
y
 
P
u
s
h
 
W
e
b
S
o
c
k
e
t
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
o
t
i
f
y
-
p
u
s
h
-
w
e
b
s
o
c
k
e
t
)
 
—
 
r
o
u
t
e
s
 
W
S
S
 
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
 
(
6
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
)




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
 
A
l
l
 
2
5
 
s
e
r
v
i
c
e
s
 
(
H
T
T
P
S
 
r
o
u
t
i
n
g
,
 
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
)


-
 
[
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
]
(
.
.
/
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
/
)
 
(
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
,
 
t
i
m
e
o
u
t
s
)


-
 
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
 
(
h
a
p
r
o
x
y
_
e
x
p
o
r
t
e
r
 
m
e
t
r
i
c
s
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
 
a
c
c
e
s
s
 
d
e
p
e
n
d
s
 
o
n
 
i
n
g
r
e
s
s
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
R
e
q
u
e
s
t
 
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
m
s
 
(
p
r
o
x
y
 
l
a
t
e
n
c
y
,
 
n
o
t
 
b
a
c
k
e
n
d
)
 
|
 
h
a
p
r
o
x
y
_
e
x
p
o
r
t
e
r
 
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
5
x
x
 
f
r
o
m
 
i
n
g
r
e
s
s
)
 
|
 
h
a
p
r
o
x
y
_
e
x
p
o
r
t
e
r
 
r
e
s
p
o
n
s
e
 
c
o
d
e
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
 
I
n
g
r
e
s
s
 
d
o
w
n
 
(
`
u
p
{
j
o
b
=
"
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
"
}
 
=
=
 
0
`
)
 
f
o
r
 
2
 
m
i
n
u
t
e
s
 
→
 
C
r
i
t
i
c
a
l
 
a
l
e
r
t


-
 
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
y
 
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
T
O
:
 
5
 
m
i
n
,
 
n
o
 
d
a
t
a
 
l
o
s
s
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
 
i
s
 
s
t
a
t
e
l
e
s
s
 
—
 
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
 
r
e
s
t
o
r
e
s
 
f
u
l
l
 
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
i
t
y


-
 
N
o
 
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
 
d
a
t
a
 
t
o
 
r
e
c
o
v
e
r




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
 
C
h
e
c
k
 
p
o
d
 
s
t
a
t
u
s
:
 
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
 
p
o
d
s
 
-
l
 
a
p
p
.
k
u
b
e
r
n
e
t
e
s
.
i
o
/
n
a
m
e
=
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
`


2
.
 
I
f
 
p
o
d
s
 
a
r
e
 
f
a
i
l
i
n
g
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
 
p
o
d
s
 
-
l
 
a
p
p
.
k
u
b
e
r
n
e
t
e
s
.
i
o
/
n
a
m
e
=
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
`


3
.
 
V
e
r
i
f
y
:
 
`
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
S
h
a
r
e
d
 
I
P
*
*
:
 
B
o
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
-
n
g
i
n
x
`
 
a
n
d
 
`
h
a
p
r
o
x
y
`
 
s
h
a
r
e
 
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
.
 
S
e
r
v
i
c
e
s
 
M
U
S
T
 
u
s
e
 
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
 
u
n
l
e
s
s
 
t
h
e
y
 
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
 
n
e
e
d
 
n
g
i
n
x
.


-
 
*
*
P
l
a
n
k
a
 
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
 
c
o
n
f
l
i
c
t
*
*
:
 
U
p
s
t
r
e
a
m
 
P
l
a
n
k
a
 
c
h
a
r
t
 
s
e
t
s
 
`
k
u
b
e
r
n
e
t
e
s
.
i
o
/
i
n
g
r
e
s
s
.
c
l
a
s
s
:
 
n
g
i
n
x
`
.
 
R
e
m
o
v
e
 
t
h
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
 
a
n
d
 
s
e
t
 
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
.


-
 
*
*
N
e
x
t
c
l
o
u
d
 
A
I
O
 
p
r
o
b
e
s
*
*
:
 
P
a
t
c
h
 
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
 
u
s
e
 
`
p
e
r
i
o
d
S
e
c
o
n
d
s
`
 
i
n
s
t
e
a
d
 
o
f
 
`
i
n
i
t
i
a
l
D
e
l
a
y
S
e
c
o
n
d
s
`
.

