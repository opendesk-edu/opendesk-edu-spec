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
e
c
r
e
t
 
D
e
r
i
v
a
t
i
o
n
 
a
n
d
 
P
a
s
s
w
o
r
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
 
h
o
w
 
s
e
c
r
e
t
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
r
i
v
e
d
 
a
n
d
 
m
a
n
a
g
e
d
 
a
c
r
o
s
s
 
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
,
 
e
n
s
u
r
i
n
g
 
s
e
c
u
r
i
t
y
,
 
r
e
p
r
o
d
u
c
i
b
i
l
i
t
y
,
 
a
n
d
 
a
u
d
i
t
a
b
i
l
i
t
y
 
o
f
 
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
 
K
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
 
s
t
r
a
t
e
g
i
e
s
 
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
/
S
e
c
u
r
i
t
y
 
s
p
e
c
s
)


-
 
S
e
c
r
e
t
s
 
s
t
o
r
a
g
e
 
m
e
c
h
a
n
i
s
m
 
(
v
a
u
l
t
,
 
k
8
s
 
s
e
c
r
e
t
s
,
 
e
n
v
 
v
a
r
s
)


-
 
T
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
e
x
t
e
r
n
a
l
 
I
d
P
s
,
 
S
a
a
S
 
s
e
r
v
i
c
e
s
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
A
S
T
E
R
_
P
A
S
S
W
O
R
D
 
D
e
r
i
v
a
t
i
o
n
 
P
a
t
t
e
r
n




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
-
s
p
e
c
i
f
i
c
 
p
a
s
s
w
o
r
d
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
r
i
v
e
d
 
f
r
o
m
 
a
 
s
i
n
g
l
e
 
`
M
A
S
T
E
R
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


u
s
i
n
g
 
a
 
d
e
t
e
r
m
i
n
i
s
t
i
c
 
d
e
r
i
v
a
t
i
o
n
 
f
u
n
c
t
i
o
n
 
(
`
d
e
r
i
v
e
P
a
s
s
w
o
r
d
`
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
a
s
s
w
o
r
d
 
d
e
r
i
v
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
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
 
b
a
s
e
 
v
a
l
u
e
 
(
3
2
+
 
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
 
g
e
n
e
r
a
t
e
d
 
o
f
f
l
i
n
e
)


-
 
W
H
E
N
 
`
d
e
r
i
v
e
P
a
s
s
w
o
r
d
(
"
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
"
,
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
)
`
 
i
s
 
c
a
l
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
 
f
u
n
c
t
i
o
n
 
r
e
t
u
r
n
s
 
a
 
u
n
i
q
u
e
 
p
a
s
s
w
o
r
d
 
f
o
r
 
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
 
s
a
m
e
 
i
n
p
u
t
 
p
r
o
d
u
c
e
s
 
t
h
e
 
s
a
m
e
 
o
u
t
p
u
t
 
(
d
e
t
e
r
m
i
n
i
s
t
i
c
)


-
 
A
N
D
 
d
i
f
f
e
r
e
n
t
 
i
n
p
u
t
 
s
a
l
t
s
 
p
r
o
d
u
c
e
 
d
i
f
f
e
r
e
n
t
 
o
u
t
p
u
t
s
 
(
p
r
e
v
e
n
t
s
 
r
e
u
s
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
 
M
u
l
t
i
p
l
e
 
s
e
r
v
i
c
e
 
p
a
s
s
w
o
r
d
 
d
e
r
i
v
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
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
 
b
a
s
e
 
v
a
l
u
e


-
 
W
H
E
N
 
p
a
s
s
w
o
r
d
s
 
a
r
e
 
d
e
r
i
v
e
d
 
f
o
r
 
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
,
 
R
e
d
i
s
,
 
M
i
n
I
O
,
 
L
D
A
P
 
w
i
t
h
 
u
n
i
q
u
e
 
s
a
l
t
s


-
 
T
H
E
N
 
e
a
c
h
 
d
e
r
i
v
e
d
 
p
a
s
s
w
o
r
d
 
i
s
 
c
r
y
p
t
o
g
r
a
p
h
i
c
a
l
l
y
 
u
n
i
q
u
e


-
 
A
N
D
 
n
o
 
t
w
o
 
s
e
r
v
i
c
e
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
 
p
a
s
s
w
o
r
d


-
 
A
N
D
 
r
e
v
e
r
s
i
n
g
 
t
h
e
 
d
e
r
i
v
a
t
i
o
n
 
i
s
 
i
n
f
e
a
s
i
b
l
e
 
(
o
n
e
-
w
a
y
 
f
u
n
c
t
i
o
n
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
 
D
e
r
i
v
a
t
i
o
n
 
F
u
n
c
t
i
o
n
 
S
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




T
h
e
 
`
d
e
r
i
v
e
P
a
s
s
w
o
r
d
`
 
f
u
n
c
t
i
o
n
 
S
H
A
L
L
 
u
s
e
 
P
B
K
D
F
2
-
H
M
A
C
-
S
H
A
2
5
6
 
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
 
1
0
0
,
0
0
0


i
t
e
r
a
t
i
o
n
s
 
a
n
d
 
a
 
s
e
r
v
i
c
e
-
s
p
e
c
i
f
i
c
 
s
a
l
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
 
d
e
r
i
v
e
P
a
s
s
w
o
r
d
 
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
 
n
a
m
e
 
(
s
a
l
t
)
 
a
n
d
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D


-
 
W
H
E
N
 
`
d
e
r
i
v
e
P
a
s
s
w
o
r
d
(
s
e
r
v
i
c
e
,
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
)
`
 
i
s
 
e
x
e
c
u
t
e
d


-
 
T
H
E
N
 
P
B
K
D
F
2
-
H
M
A
C
-
S
H
A
2
5
6
 
w
i
t
h
 
1
0
0
,
0
0
0
 
i
t
e
r
a
t
i
o
n
s
 
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
 
i
s
 
t
h
e
 
s
a
l
t
 
(
e
.
g
.
,
 
"
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
"
,
 
"
r
e
d
i
s
"
,
 
"
m
i
n
i
o
"
)


-
 
A
N
D
 
t
h
e
 
o
u
t
p
u
t
 
i
s
 
b
a
s
e
6
4
-
e
n
c
o
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
 
o
u
t
p
u
t
 
l
e
n
g
t
h
 
i
s
 
a
t
 
l
e
a
s
t
 
3
2
 
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


-
 
A
N
D
 
t
h
e
 
o
u
t
p
u
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
t
 
l
e
a
s
t
:
 
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
 
u
p
p
e
r
c
a
s
e
,
 
d
i
g
i
t
s
,
 
s
p
e
c
i
a
l
 
c
h
a
r
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
 
s
a
l
t
 
u
n
i
q
u
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
 
`
d
e
r
i
v
e
P
a
s
s
w
o
r
d
(
"
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
"
,
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
)
`
 
r
e
t
u
r
n
s
 
P
1


-
 
W
H
E
N
 
`
d
e
r
i
v
e
P
a
s
s
w
o
r
d
(
"
r
e
d
i
s
"
,
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
)
`
 
r
e
t
u
r
n
s
 
R
1


-
 
T
H
E
N
 
P
1
 
≠
 
R
1
 
(
c
r
y
p
t
o
g
r
a
p
h
i
c
a
l
l
y
 
d
i
s
t
i
n
c
t
)


-
 
A
N
D
 
`
d
e
r
i
v
e
P
a
s
s
w
o
r
d
(
"
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
"
,
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
)
`
 
s
t
i
l
l
 
r
e
t
u
r
n
s
 
P
1
 
(
d
e
t
e
r
m
i
n
i
s
t
i
c
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
r
v
i
c
e
 
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




A
l
l
 
d
e
r
i
v
e
d
 
p
a
s
s
w
o
r
d
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
 
p
a
t
t
e
r
n
 
i
n
 
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
s
 
a
n
d
 
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
d
 
"
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
"
 
w
i
t
h
 
d
e
r
i
v
e
d
 
p
a
s
s
w
o
r
d


-
 
W
H
E
N
 
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
 
i
s
 
c
r
e
a
t
e
d
 
f
o
r
 
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
r
e
t
 
k
e
y
 
f
o
l
l
o
w
s
 
`
s
e
r
v
i
c
e
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
_
t
y
p
e
`
 
p
a
t
t
e
r
n


-
 
A
N
D
 
c
o
m
m
o
n
 
k
e
y
 
n
a
m
e
s
 
i
n
c
l
u
d
e
:
 
`
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
,
 
`
m
y
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
,
 
`
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
,
 
`
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
,
 
`
a
p
i
_
k
e
y
`
,
 
`
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
 
r
e
f
e
r
e
n
c
e
 
p
a
t
t
e
r
n


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
 
r
e
q
u
i
r
i
n
g
 
a
 
p
a
s
s
w
o
r
d


-
 
W
H
E
N
 
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
 
r
e
f
e
r
e
n
c
e
 
t
h
e
 
p
a
s
s
w
o
r
d


-
 
T
H
E
N
 
v
a
l
u
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
r
v
i
c
e
.
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
T
y
p
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
R
e
f
`
 
p
a
t
t
e
r
n


-
 
O
R
 
v
a
l
u
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
r
v
i
c
e
.
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
T
y
p
e
.
s
e
c
r
e
t
K
e
y
R
e
f
`
 
p
a
t
t
e
r
n
 
f
o
r
 
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
A
S
T
E
R
_
P
A
S
S
W
O
R
D
 
S
e
c
u
r
i
t
y




T
h
e
 
`
M
A
S
T
E
R
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
 
S
H
A
L
L
 
n
e
v
e
r
 
b
e
 
s
t
o
r
e
d
 
i
n
 
p
l
a
i
n
t
e
x
t
 
i
n
 
t
h
e
 
r
e
p
o
s
i
t
o
r
y
,


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
 
f
i
l
e
s
,
 
o
r
 
l
o
g
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
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
 
o
f
f
l
i
n
e
 
g
e
n
e
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
 
a
 
s
e
c
u
r
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
 
(
a
i
r
-
g
a
p
p
e
d
 
m
a
c
h
i
n
e
 
o
r
 
o
f
f
l
i
n
e
 
C
I
)


-
 
W
H
E
N
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
 
i
s
 
g
e
n
e
r
a
t
e
d
 
u
s
i
n
g
 
`
o
p
e
n
s
s
l
 
r
a
n
d
 
-
b
a
s
e
6
4
 
4
8
`


-
 
T
H
E
N
 
t
h
e
 
o
u
t
p
u
t
 
i
s
 
a
 
6
4
-
c
h
a
r
a
c
t
e
r
 
b
a
s
e
6
4
 
s
t
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
 
o
u
t
p
u
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
 
a
n
 
e
n
c
r
y
p
t
e
d
 
f
i
l
e
 
o
r
 
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
n
a
g
e
r


-
 
A
N
D
 
t
h
e
 
o
u
t
p
u
t
 
i
s
 
N
E
V
E
R
 
c
o
m
m
i
t
t
e
d
 
t
o
 
g
i
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
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
 
i
n
j
e
c
t
i
o
n
 
a
t
 
d
e
p
l
o
y
 
t
i
m
e


-
 
G
I
V
E
N
 
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
 
p
i
p
e
l
i
n
e
 
w
i
t
h
 
a
c
c
e
s
s
 
t
o
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D


-
 
W
H
E
N
 
t
h
e
 
p
i
p
e
l
i
n
e
 
d
e
p
l
o
y
s
 
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


-
 
T
H
E
N
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
 
i
s
 
i
n
j
e
c
t
e
d
 
v
i
a
 
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
 
v
a
r
i
a
b
l
e


-
 
O
R
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
 
i
s
 
i
n
j
e
c
t
e
d
 
v
i
a
 
C
I
 
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
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
 
i
s
 
N
E
V
E
R
 
w
r
i
t
t
e
n
 
t
o
 
d
i
s
k
 
u
n
e
n
c
r
y
p
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
a
l
t
 
S
t
r
a
t
e
g
y
 
f
o
r
 
D
e
r
i
v
a
t
i
o
n




E
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
 
S
H
A
L
L
 
u
s
e
 
a
 
u
n
i
q
u
e
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
v
e
 
s
a
l
t
 
f
o
r
 
p
a
s
s
w
o
r
d
 
d
e
r
i
v
a
t
i
o
n


t
h
a
t
 
i
d
e
n
t
i
f
i
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
 
a
n
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
 
t
y
p
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
n
g
l
e
-
s
e
r
v
i
c
e
 
s
i
n
g
l
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
 
w
i
t
h
 
o
n
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
 
(
e
.
g
.
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
 
d
a
t
a
b
a
s
e
 
p
a
s
s
w
o
r
d
)


-
 
W
H
E
N
 
d
e
r
i
v
i
n
g
 
t
h
e
 
p
a
s
s
w
o
r
d


-
 
T
H
E
N
 
t
h
e
 
s
a
l
t
 
i
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
e
.
g
.
,
 
"
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
 
M
u
l
t
i
-
s
e
r
v
i
c
e
 
s
i
n
g
l
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
 
s
e
r
v
i
c
e
s
 
s
h
a
r
i
n
g
 
a
 
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
 
a
n
d
 
M
o
o
d
l
e
 
b
o
t
h
 
u
s
i
n
g
 
M
a
r
i
a
D
B
)


-
 
W
H
E
N
 
d
e
r
i
v
i
n
g
 
t
h
e
 
s
h
a
r
e
d
 
p
a
s
s
w
o
r
d


-
 
T
H
E
N
 
t
h
e
 
s
a
l
t
 
i
n
c
l
u
d
e
s
 
b
o
t
h
 
s
e
r
v
i
c
e
s
 
(
e
.
g
.
,
 
"
i
l
i
a
s
-
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
a
m
e
 
d
e
r
i
v
e
d
 
p
a
s
s
w
o
r
d
 
i
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
d
 
b
y
 
b
o
t
h
 
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
-
s
e
r
v
i
c
e
 
m
u
l
t
i
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
 
w
i
t
h
 
m
u
l
t
i
p
l
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
 
(
e
.
g
.
,
 
R
e
d
i
s
 
p
a
s
s
w
o
r
d
 
+
 
p
o
r
t
)


-
 
W
H
E
N
 
d
e
r
i
v
i
n
g
 
e
a
c
h
 
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


-
 
T
H
E
N
 
e
a
c
h
 
d
e
r
i
v
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
 
u
n
i
q
u
e
 
s
a
l
t
 
(
e
.
g
.
,
 
"
r
e
d
i
s
-
p
a
s
s
w
o
r
d
"
,
 
"
r
e
d
i
s
-
p
o
r
t
"
)


-
 
A
N
D
 
e
a
c
h
 
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
 
i
s
 
c
r
y
p
t
o
g
r
a
p
h
i
c
a
l
l
y
 
d
i
s
t
i
n
c
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
 
R
o
t
a
t
i
o
n
 
P
l
a
n
n
i
n
g




W
h
i
l
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
 
i
s
 
o
u
t
s
i
d
e
 
t
h
e
 
s
c
o
p
e
 
o
f
 
t
h
i
s
 
s
p
e
c
,
 
d
e
r
i
v
e
d
 
p
a
s
s
w
o
r
d
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
 
r
o
t
a
t
i
o
n
 
w
i
t
h
o
u
t
 
d
o
w
n
t
i
m
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
 
R
o
t
a
t
i
o
n
 
v
i
a
 
n
e
w
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D


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
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
2
 
r
e
p
l
a
c
e
s
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
1


-
 
W
H
E
N
 
a
l
l
 
d
e
r
i
v
e
d
 
p
a
s
s
w
o
r
d
s
 
a
r
e
 
r
e
-
d
e
r
i
v
e
d
 
w
i
t
h
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
2


-
 
T
H
E
N
 
s
e
r
v
i
c
e
s
 
u
p
d
a
t
e
 
t
h
e
i
r
 
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
 
p
l
a
c
e


-
 
A
N
D
 
g
r
a
c
e
f
u
l
 
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
 
i
s
 
s
u
p
p
o
r
t
e
d
 
v
i
a
 
r
o
l
l
i
n
g
 
u
p
d
a
t
e


-
 
A
N
D
零
 
d
o
w
n
t
i
m
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
 
h
a
n
d
o
f
f
 
i
s
 
p
o
s
s
i
b
l
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
 
d
e
r
i
v
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


-
 
G
I
V
E
N
 
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
 
s
c
r
i
p
t
 
t
h
a
t
 
d
e
r
i
v
e
s
 
p
a
s
s
w
o
r
d
s
 
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


-
 
W
H
E
N
 
t
h
e
 
s
c
r
i
p
t
 
i
s
 
r
e
-
r
u
n
 
w
i
t
h
 
a
 
n
e
w
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D


-
 
T
H
E
N
 
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
 
p
a
s
s
w
o
r
d
s
 
u
p
d
a
t
e
 
i
n
 
o
n
e
 
o
p
e
r
a
t
i
o
n


-
 
A
N
D
 
t
h
e
 
s
c
r
i
p
t
 
l
o
g
s
 
w
h
i
c
h
 
s
e
r
v
i
c
e
s
 
r
e
c
e
i
v
e
d
 
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


-
 
A
N
D
 
t
h
e
 
s
c
r
i
p
t
 
a
l
l
o
w
s
 
s
e
l
e
c
t
i
v
e
 
s
e
r
v
i
c
e
 
r
o
t
a
t
i
o
n
 
(
s
u
b
s
e
t
 
o
f
 
s
e
r
v
i
c
e
s
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
 
S
e
c
u
r
i
t
y
 
s
p
e
c
 
(
p
r
i
v
i
l
e
g
e
 
s
e
p
a
r
a
t
i
o
n
,
 
a
c
c
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
s
)


-
 
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
 
s
p
e
c
 
(
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
,
 
s
e
c
r
e
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
)


-
 
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
 
s
p
e
c
 
(
h
e
l
m
f
i
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
,
 
C
I
/
C
D
 
p
i
p
e
l
i
n
e
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
 
(
p
r
e
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
 
p
a
s
s
w
o
r
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
)


-
 
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
 
(
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
 
r
u
n
b
o
o
k
s
,
 
s
e
c
r
e
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
)


-
 
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
 
(
h
e
l
m
f
i
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
 
p
a
t
t
e
r
n
s
)




*
*
S
e
r
v
i
c
e
 
S
p
e
c
s
*
*
:


-
 
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
p
e
c
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
 
d
e
r
i
v
e
d
 
p
a
s
s
w
o
r
d
s
 
v
i
a
 
`
s
e
c
r
e
t
`
 
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
 
N
u
b
u
s
 
I
A
M
 
(
K
e
y
c
l
o
a
k
,
 
O
p
e
n
L
D
A
P
 
p
a
s
s
w
o
r
d
 
d
e
r
i
v
a
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
 
s
e
r
v
i
c
e
s
 
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
,
 
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
e
r
i
v
a
t
i
o
n
)


-
 
S
t
o
r
a
g
e
 
s
e
r
v
i
c
e
s
 
(
M
i
n
I
O
 
S
3
,
 
R
e
d
i
s
 
p
a
s
s
w
o
r
d
 
d
e
r
i
v
a
t
i
o
n
)


-
 
M
a
i
l
 
s
e
r
v
i
c
e
s
 
(
D
o
v
e
c
o
t
 
P
o
s
t
f
i
x
 
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
 
D
e
r
i
v
a
t
i
o
n
 
F
u
n
c
t
i
o
n
 
|
 
P
B
K
D
F
2
-
H
M
A
C
-
S
H
A
2
5
6
 
(
1
0
0
,
0
0
0
 
i
t
e
r
a
t
i
o
n
s
)
 
|


|
 
S
a
l
t
 
F
o
r
m
a
t
 
|
 
S
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
 
o
r
 
`
s
e
r
v
i
c
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
-
t
y
p
e
`
 
p
a
t
t
e
r
n
 
|


|
 
O
u
t
p
u
t
 
E
n
c
o
d
i
n
g
 
|
 
B
a
s
e
6
4
,
 
3
2
+
 
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
 
|


|
 
O
u
t
p
u
t
 
C
h
a
r
a
c
t
e
r
 
S
e
t
 
|
 
l
o
w
e
r
c
a
s
e
 
+
 
u
p
p
e
r
c
a
s
e
 
+
 
d
i
g
i
t
s
 
+
 
s
p
e
c
i
a
l
 
c
h
a
r
s
 
|


|
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
 
L
e
n
g
t
h
 
|
 
4
8
+
 
b
y
t
e
s
 
(
6
4
 
c
h
a
r
s
 
b
a
s
e
6
4
)
 
|


|
 
M
A
S
T
E
R
_
P
A
S
S
W
O
R
D
 
S
t
o
r
a
g
e
 
|
 
E
n
c
r
y
p
t
e
d
 
f
i
l
e
 
C
I
 
s
e
c
r
e
t
s
 
(
s
p
a
n
n
e
r
 
m
e
a
n
s
)
 
|


|
 
S
e
c
r
e
t
 
K
e
y
 
P
a
t
t
e
r
n
 
|
 
`
s
e
r
v
i
c
e
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
_
t
y
p
e
`
 
(
e
.
g
.
,
 
`
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
 
|


|
 
H
e
l
m
 
R
e
f
e
r
e
n
c
e
 
P
a
t
t
e
r
n
 
|
 
`
s
e
r
v
i
c
e
.
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
T
y
p
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
R
e
f
`
 
o
r
 
`
s
e
c
r
e
t
K
e
y
R
e
f
`
 
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
s
c
r
i
p
t
s
/
d
e
r
i
v
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
.
s
h
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
*
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
`
 
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
t
i
m
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
)
 
|