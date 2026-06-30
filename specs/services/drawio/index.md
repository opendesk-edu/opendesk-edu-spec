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
 
D
r
a
w
.
i
o
 
(
j
g
r
a
p
h
/
d
r
a
w
i
o
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
t
a
t
e
l
e
s
s
 
d
i
a
g
r
a
m
m
i
n
g
 
t
o
o
l
 
(
`
j
g
r
a
p
h
/
d
r
a
w
i
o
`
)
 
f
o
r
 
a
r
c
h
i
t
e
c
t
u
r
e
 
d
i
a
g
r
a
m
s
,


f
l
o
w
c
h
a
r
t
s
,
 
U
M
L
,
 
a
n
d
 
n
e
t
w
o
r
k
 
d
i
a
g
r
a
m
s
.
 
R
e
q
u
i
r
e
s
 
*
*
N
O
 
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
*
*
 
a
n
d


p
e
r
s
i
s
t
s
 
*
*
N
O
 
d
a
t
a
 
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
*
*
.
 
U
s
e
r
s
 
m
u
s
t
 
e
x
p
o
r
t
 
o
r
 
s
a
v
e
 
d
i
a
g
r
a
m
s
 
l
o
c
a
l
l
y


o
r
 
t
o
 
e
x
t
e
r
n
a
l
 
s
t
o
r
a
g
e
 
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
 
G
i
t
 
r
e
p
o
s
i
t
o
r
i
e
s
)
 
b
e
f
o
r
e
 
c
l
o
s
i
n
g
 
t
h
e


b
r
o
w
s
e
r
 
t
a
b
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
t
a
t
e
l
e
s
s
 
d
i
a
g
r
a
m
 
e
d
i
t
o
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
 
c
l
i
e
n
t
-
s
i
d
e
 
r
e
n
d
e
r
i
n
g
,
 
p
u
b
l
i
c
 
a
c
c
e
s
s
 
(
n
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
i
o
n
)
,
 
e
x
p
o
r
t
 
t
o
 
m
u
l
t
i
p
l
e
 
f
o
r
m
a
t
s
 
(
P
N
G
/
J
P
E
G
/
S
V
G
/
P
D
F
)


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
 
d
i
a
g
r
a
m
 
s
t
o
r
a
g
e
 
(
u
s
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
,
 
G
i
t
,
 
e
t
c
.
)
,
 
r
e
a
l
-
t
i
m
e
 
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
o
n
 
(
u
s
e
 
M
i
r
o
,
 
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
)
,
 
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
/
a
u
t
h
o
r
i
z
a
t
i
o
n
 
(
p
u
b
l
i
c
 
a
c
c
e
s
s
 
o
n
l
y
)
,
 
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
 
d
i
a
g
r
a
m
 
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
 
(
c
l
i
e
n
t
-
s
i
d
e
 
J
a
v
a
S
c
r
i
p
t
 
o
n
l
y
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
 
d
i
a
g
r
a
m
 
s
t
o
r
a
g
e
 
(
u
s
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
,
 
G
i
t
 
r
e
p
o
s
i
t
o
r
i
e
s
,
 
e
t
c
.
)


-
 
R
e
a
l
-
t
i
m
e
 
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
o
n
 
(
u
s
e
 
M
i
r
o
,
 
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
,
 
e
t
c
.
)


-
 
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
/
a
u
t
h
o
r
i
z
a
t
i
o
n
 
(
p
u
b
l
i
c
 
a
c
c
e
s
s
 
o
n
l
y
)


-
 
S
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
 
d
i
a
g
r
a
m
 
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
 
(
a
l
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
s
 
c
l
i
e
n
t
-
s
i
d
e
 
J
a
v
a
S
c
r
i
p
t
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
 
S
t
a
t
e
l
e
s
s
 
d
i
a
g
r
a
m
 
e
d
i
t
o
r




D
r
a
w
.
i
o
 
S
H
A
L
L
 
l
o
a
d
 
a
n
d
 
f
u
n
c
t
i
o
n
 
e
n
t
i
r
e
l
y
 
i
n
 
t
h
e
 
b
r
o
w
s
e
r
 
w
i
t
h
o
u
t
 
a
n
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
i
o
n


o
r
 
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
,
 
w
i
t
h
 
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
 
m
u
l
t
i
p
l
e
 
d
i
a
g
r
a
m
 
t
y
p
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
 
U
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
 
d
i
a
g
r
a
m


-
 
G
I
V
E
N
 
a
n
y
 
u
s
e
r
 
(
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
 
o
r
 
a
n
o
n
y
m
o
u
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
 
`
h
t
t
p
s
:
/
/
d
r
a
w
i
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
`


-
 
T
H
E
N
 
t
h
e
 
e
d
i
t
o
r
 
l
o
a
d
s
 
a
t
 
H
T
T
P
 
p
o
r
t
 
8
0
8
0
 
(
i
n
t
e
r
n
a
l
)


-
 
A
N
D
 
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
 
r
o
u
t
e
s
 
t
r
a
f
f
i
c
 
t
o
 
p
o
r
t
 
8
0
8
0


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
 
c
r
e
a
t
e
,
 
e
d
i
t
,
 
a
n
d
 
e
x
p
o
r
t
 
d
i
a
g
r
a
m
s


-
 
A
N
D
 
N
O
 
d
a
t
a
 
i
s
 
p
e
r
s
i
s
t
e
d
 
w
h
e
n
 
t
h
e
 
b
r
o
w
s
e
r
 
t
a
b
 
i
s
 
c
l
o
s
e
d


-
 
A
N
D
 
s
u
p
p
o
r
t
e
d
 
f
o
r
m
a
t
s
 
i
n
c
l
u
d
e
:
 
F
l
o
w
 
c
h
a
r
t
,
 
U
M
L
,
 
E
R
 
d
i
a
g
r
a
m
,
 
N
e
t
w
o
r
k
 
d
i
a
g
r
a
m
,
 
O
r
g
a
n
i
z
a
t
i
o
n
 
c
h
a
r
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
i
a
g
r
a
m
 
e
x
p
o
r
t
 
a
n
d
 
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
 
w
i
t
h
 
a
 
c
o
m
p
l
e
t
e
d
 
d
i
a
g
r
a
m


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
 
w
a
n
t
s
 
t
o
 
s
a
v
e
 
t
h
e
 
d
i
a
g
r
a
m


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
 
M
U
S
T
 
e
x
p
o
r
t
 
o
r
 
s
a
v
e
 
t
o
 
l
o
c
a
l
 
d
e
v
i
c
e
 
(
F
i
l
e
 
→
 
D
o
w
n
l
o
a
d
 
a
s
 
P
N
G
/
S
V
G
/
P
D
F
/
X
M
L
)


-
 
O
R
 
s
a
v
e
 
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
v
i
a
 
F
i
l
e
 
→
 
S
a
v
e
 
→
 
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


-
 
O
R
 
s
a
v
e
 
t
o
 
G
i
t
 
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
 
(
v
i
a
 
F
i
l
e
 
→
 
S
a
v
e
 
→
 
G
i
t
)


-
 
A
N
D
 
n
o
 
c
l
o
u
d
 
s
t
o
r
a
g
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
 
(
n
o
 
"
S
a
v
e
 
t
o
 
C
l
o
u
d
"
 
o
p
t
i
o
n
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
 
d
i
a
g
r
a
m
 
t
y
p
e
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
 
a
c
c
e
s
s
i
n
g
 
D
r
a
w
.
i
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
 
s
e
l
e
c
t
s
 
a
 
d
i
a
g
r
a
m
 
t
y
p
e


-
 
T
H
E
N
 
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
y
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
:
 
F
l
o
w
 
c
h
a
r
t
,
 
B
P
M
N
,
 
U
M
L
,
 
E
R
 
d
i
a
g
r
a
m
,
 
N
e
t
w
o
r
k
 
d
i
a
g
r
a
m
,
 
O
r
g
a
n
i
z
a
t
i
o
n
 
c
h
a
r
t


-
 
A
N
D
 
e
a
c
h
 
t
y
p
e
 
h
a
s
 
a
p
p
r
o
p
r
i
a
t
e
 
s
t
e
n
c
i
l
s
 
a
n
d
 
t
e
m
p
l
a
t
e
s


-
 
A
N
D
 
s
t
e
n
c
i
l
s
 
l
o
a
d
 
d
y
n
a
m
i
c
a
l
l
y
 
w
i
t
h
o
u
t
 
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
 
r
e
n
d
e
r
i
n
g




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
 
X
-
F
o
r
w
a
r
d
e
d
-
H
o
s
t
 
f
o
r
 
i
n
t
e
r
n
a
l
 
U
R
L
 
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




D
r
a
w
.
i
o
 
r
e
l
i
e
s
 
o
n
 
t
h
e
 
`
X
-
F
o
r
w
a
r
d
e
d
-
H
o
s
t
`
 
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
 
t
o
 
g
e
n
e
r
a
t
e
 
c
o
r
r
e
c
t
 
i
n
t
e
r
n
a
l


U
R
L
s
 
f
o
r
 
t
o
o
l
s
,
 
p
l
u
g
i
n
s
,
 
a
n
d
 
a
s
s
e
t
 
l
o
a
d
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
 
h
e
a
d
e
r


-
 
G
I
V
E
N
 
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
 
r
o
u
t
i
n
g
 
t
o
 
D
r
a
w
.
i
o


-
 
T
H
E
N
 
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
e
t
s
 
`
X
-
F
o
r
w
a
r
d
e
d
-
H
o
s
t
:
 
d
r
a
w
i
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
`


-
 
A
N
D
 
D
r
a
w
.
i
o
 
g
e
n
e
r
a
t
e
s
 
c
o
r
r
e
c
t
 
i
n
t
e
r
n
a
l
 
U
R
L
s
 
(
n
o
 
b
r
o
k
e
n
 
l
i
n
k
s
)


-
 
A
N
D
 
p
l
u
g
i
n
 
a
n
d
 
t
o
o
l
 
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
 
r
e
s
o
l
v
e
 
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
 
X
-
F
o
r
w
a
r
d
e
d
-
P
r
o
t
o
c
o
l
 
f
o
r
 
H
T
T
P
S


-
 
G
I
V
E
N
 
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
 
t
e
r
m
i
n
a
t
i
n
g
 
T
L
S


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
 
s
e
t
s
 
`
X
-
F
o
r
w
a
r
d
e
d
-
P
r
o
t
o
:
 
h
t
t
p
s
`


-
 
A
N
D
 
D
r
a
w
.
i
o
 
g
e
n
e
r
a
t
e
s
 
H
T
T
P
S
 
U
R
L
s
 
(
n
o
t
 
H
T
T
P
)


-
 
A
N
D
 
m
i
x
e
d
 
c
o
n
t
e
n
t
 
w
a
r
n
i
n
g
s
 
a
r
e
 
a
v
o
i
d
e
d
 
i
n
 
b
r
o
w
s
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
 
R
e
s
o
u
r
c
e
 
l
i
m
i
t
s
 
a
n
d
 
a
u
t
o
-
s
c
a
l
i
n
g




D
r
a
w
.
i
o
 
S
H
A
L
L
 
o
p
e
r
a
t
e
 
w
i
t
h
i
n
 
d
e
f
i
n
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
 
l
i
m
i
t
s
 
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
 
h
o
r
i
z
o
n
t
a
l


a
u
t
o
s
c
a
l
i
n
g
 
f
o
r
 
l
o
a
d
 
d
i
s
t
r
i
b
u
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
 
D
e
f
a
u
l
t
 
r
e
s
o
u
r
c
e
 
a
l
l
o
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
 
D
r
a
w
.
i
o
 
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
 
c
o
n
t
a
i
n
e
r
 
m
e
m
o
r
y
:
 
`
5
1
2
M
i
`
 
(
l
i
m
i
t
 
2
G
i
)
,
 
C
P
U
:
 
`
2
0
0
m
`
 
(
l
i
m
i
t
 
1
 
c
o
r
e
)


-
 
A
N
D
 
p
o
d
 
c
o
u
n
t
:
 
1
 
b
y
 
d
e
f
a
u
l
t
 
(
s
t
a
t
e
l
e
s
s
,
 
n
o
 
d
a
t
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
c
y
 
c
o
n
c
e
r
n
s
)


-
 
A
N
D
 
O
O
M
K
i
l
l
e
r
 
p
r
i
o
r
i
t
i
z
e
s
 
t
e
r
m
i
n
a
t
i
n
g
 
e
m
p
t
y
 
p
o
d
s
 
f
i
r
s
t
 
(
u
s
e
r
s
 
w
i
t
h
 
n
o
 
a
c
t
i
v
e
 
s
e
s
s
i
o
n
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
 
H
o
r
i
z
o
n
t
a
l
 
p
o
d
 
a
u
t
o
s
c
a
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
 
H
P
A
 
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
 
`
t
a
r
g
e
t
C
P
U
U
t
i
l
i
z
a
t
i
o
n
P
e
r
c
e
n
t
a
g
e
:
 
8
0
`


-
 
W
H
E
N
 
C
P
U
 
u
s
a
g
e
 
e
x
c
e
e
d
s
 
8
0
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


-
 
T
H
E
N
 
n
e
w
 
r
e
p
l
i
c
a
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
 
(
u
p
 
t
o
 
m
a
x
 
5
 
r
e
p
l
i
c
a
s
)


-
 
A
N
D
 
n
e
w
 
r
e
p
l
i
c
a
s
 
a
r
e
 
r
e
a
d
y
 
t
o
 
s
e
r
v
e
 
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
i
n
 
3
0
 
s
e
c
o
n
d
s


-
 
A
N
D
 
l
o
a
d
 
b
a
l
a
n
c
e
r
 
d
i
s
t
r
i
b
u
t
e
s
 
t
r
a
f
f
i
c
 
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
 
v
i
a
 
R
o
u
n
d
-
r
o
b
i
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
e
c
u
r
i
t
y
 
a
n
d
 
i
s
o
l
a
t
i
o
n




D
r
a
w
.
i
o
 
S
H
A
L
L
 
r
u
n
 
w
i
t
h
 
m
i
n
i
m
a
l
 
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
 
a
n
d
 
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
e
c
u
r
i
t
y
 
h
a
r
d
e
n
i
n
g
,


d
e
s
p
i
t
e
 
b
e
i
n
g
 
p
u
b
l
i
c
l
y
 
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
n
-
r
o
o
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


-
 
G
I
V
E
N
 
D
r
a
w
.
i
o
 
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
 
w
i
t
h
 
s
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
 
(
n
g
i
n
x
 
u
s
e
r
)
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
 
c
o
n
t
a
i
n
e
r
 
c
a
n
n
o
t
 
e
s
c
a
l
a
t
e
 
t
o
 
r
o
o
t
 
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


-
 
A
N
D
 
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
 
i
s
 
r
e
a
d
-
o
n
l
y
 
e
x
c
e
p
t
 
f
o
r
 
`
/
t
m
p
`
 
(
f
o
r
 
u
p
l
o
a
d
 
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
p
a
b
i
l
i
t
y
 
d
r
o
p
p
i
n
g


-
 
G
I
V
E
N
 
D
r
a
w
.
i
o
 
s
e
c
u
r
i
t
y
 
p
o
l
i
c
y


-
 
T
H
E
N
 
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
.
d
r
o
p
:
 
[
A
L
L
]
`


-
 
A
N
D
 
n
o
 
l
i
n
u
x
 
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
 
a
d
d
e
d
 
(
`
n
o
 
c
a
p
-
a
d
d
`
)


-
 
A
N
D
 
c
o
n
t
a
i
n
e
r
 
c
a
n
n
o
t
 
a
c
c
e
s
s
 
h
o
s
t
 
d
e
v
i
c
e
s
 
o
r
 
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


-
 
A
N
D
 
s
e
c
c
o
m
p
 
p
r
o
f
i
l
e
 
i
s
 
`
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
t
w
o
r
k
 
i
s
o
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
 
D
r
a
w
.
i
o
 
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
 
w
i
t
h
 
n
e
t
w
o
r
k
 
p
o
l
i
c
y


-
 
T
H
E
N
 
i
n
g
r
e
s
s
 
a
l
l
o
w
e
d
 
f
r
o
m
 
a
n
y
 
I
P
 
(
p
u
b
l
i
c
 
a
c
c
e
s
s
)
 
o
n
 
H
T
T
P
/
H
T
T
P
S
 
p
o
r
t
s


-
 
A
N
D
 
e
g
r
e
s
s
 
a
l
l
o
w
e
d
 
t
o
 
e
x
t
e
r
n
a
l
 
i
n
t
e
r
n
e
t
 
(
f
o
r
 
p
l
u
g
i
n
/
s
t
e
n
c
i
l
 
d
o
w
n
l
o
a
d
s
)


-
 
A
N
D
 
D
N
S
 
q
u
e
r
i
e
s
 
r
e
s
o
l
v
e
 
t
o
 
e
x
t
e
r
n
a
l
 
d
o
m
a
i
n
s
 
(
f
o
r
 
C
D
N
 
a
s
s
e
t
s
)


-
 
A
N
D
 
n
e
t
w
o
r
k
 
p
o
l
i
c
y
 
b
l
o
c
k
s
 
c
l
u
s
t
e
r
-
i
n
t
e
r
n
a
l
 
c
r
o
s
s
-
n
a
m
e
s
p
a
c
e
 
t
r
a
f
f
i
c




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
 
a
n
d
 
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




D
r
a
w
.
i
o
 
S
H
A
L
L
 
b
e
 
h
e
a
l
t
h
y
 
a
n
d
 
m
o
n
i
t
o
r
a
b
l
e
 
w
i
t
h
 
h
e
a
l
t
h
 
e
n
d
p
o
i
n
t
s
 
a
n
d
 
m
e
t
r
i
c
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
 
H
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
s


-
 
G
I
V
E
N
 
D
r
a
w
.
i
o
 
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
 
c
h
e
c
k
s
 
f
o
r
 
r
u
n
n
i
n
g
 
n
g
i
n
x
 
p
r
o
c
e
s
s
 
(
`
/
`
)


-
 
A
N
D
 
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
 
c
h
e
c
k
s
 
f
o
r
 
n
g
i
n
x
 
s
e
r
v
i
n
g
 
r
e
s
p
o
n
s
e
s
 
(
`
/
`
)


-
 
A
N
D
 
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
 
d
e
l
a
y
s
 
f
a
i
l
i
n
g
 
l
i
v
e
n
e
s
s
 
c
h
e
c
k
s
 
(
a
l
l
o
w
 
6
0
s
 
s
t
a
r
t
u
p
 
w
i
n
d
o
w
)


-
 
A
N
D
 
h
e
a
l
t
h
 
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
 
H
T
T
P
 
2
0
0
 
s
t
a
t
u
s
 
o
n
 
p
o
r
t
 
8
0
8
0




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
t
r
i
c
s
 
a
n
d
 
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
 
G
I
V
E
N
 
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
 
s
c
r
a
p
i
n
g


-
 
T
H
E
N
 
n
g
i
n
x
 
e
x
p
o
s
e
s
 
m
e
t
r
i
c
s
 
(
`
/
n
g
i
n
x
_
s
t
a
t
u
s
`
)
 
v
i
a
 
`
n
g
x
_
h
t
t
p
_
s
t
u
b
_
s
t
a
t
u
s
_
m
o
d
u
l
e
`


-
 
A
N
D
 
m
e
t
r
i
c
s
 
i
n
c
l
u
d
e
 
`
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
_
a
c
t
i
v
e
`
,
 
`
r
e
q
u
e
s
t
s
_
p
e
r
_
s
e
c
o
n
d
`
,
 
`
n
g
i
n
x
_
u
p
`


-
 
A
N
D
 
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
h
o
w
s
 
r
e
q
u
e
s
t
 
r
a
t
e
,
 
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
,
 
a
c
t
i
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
s


-
 
A
N
D
 
a
l
e
r
t
s
 
f
i
r
e
 
w
h
e
n
 
r
e
q
u
e
s
t
 
r
a
t
e
 
d
r
o
p
s
 
b
e
l
o
w
 
1
0
 
r
e
q
/
m
i
n
 
(
p
o
t
e
n
t
i
a
l
 
o
u
t
a
g
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
 
S
t
a
t
i
c
 
f
i
l
e
 
s
e
r
v
i
n
g




D
r
a
w
.
i
o
 
S
H
A
L
L
 
s
e
r
v
e
 
s
t
a
t
i
c
 
H
T
M
L
/
J
a
v
a
S
c
r
i
p
t
/
C
S
S
 
f
i
l
e
s
 
v
i
a
 
n
g
i
n
x
 
w
i
t
h
o
u
t


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
a
t
i
c
 
f
i
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
 
G
I
V
E
N
 
D
r
a
w
.
i
o
 
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
m
a
g
e
 
`
j
g
r
a
p
h
/
d
r
a
w
i
o
:
l
a
t
e
s
t
`


-
 
T
H
E
N
 
t
h
e
 
i
m
a
g
e
 
c
o
n
t
a
i
n
s
 
p
r
e
c
o
m
p
i
l
e
d
 
s
t
a
t
i
c
 
f
i
l
e
s
 
(
H
T
M
L
/
J
S
/
C
S
S
)


-
 
A
N
D
 
n
g
i
n
x
 
s
e
r
v
e
s
 
f
i
l
e
s
 
d
i
r
e
c
t
l
y
 
(
n
o
 
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
 
r
e
n
d
e
r
i
n
g
)


-
 
A
N
D
 
n
o
 
d
a
t
a
b
a
s
e
 
o
r
 
e
x
t
e
r
n
a
l
 
s
t
o
r
a
g
e
 
i
s
 
r
e
q
u
i
r
e
d


-
 
A
N
D
 
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
t
a
r
t
s
 
a
r
e
 
f
a
s
t
 
(
n
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
 
F
i
l
e
 
u
p
l
o
a
d
 
a
n
d
 
D
o
w
n
l
o
a
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
 
u
p
l
o
a
d
i
n
g
 
a
 
d
i
a
g
r
a
m
 
f
i
l
e
 
(
X
M
L
,
 
V
S
D
X
)


-
 
W
H
E
N
 
t
h
e
 
u
p
l
o
a
d
 
c
o
m
p
l
e
t
e
s


-
 
T
H
E
N
 
f
i
l
e
 
i
s
 
p
r
o
c
e
s
s
e
d
 
c
l
i
e
n
t
-
s
i
d
e
 
(
p
r
e
v
i
e
w
 
r
e
n
d
e
r
e
d
 
i
n
 
b
r
o
w
s
e
r
)


-
 
A
N
D
 
f
i
l
e
 
i
s
 
t
e
m
p
o
r
a
r
i
l
y
 
s
t
o
r
e
d
 
i
n
 
b
r
o
w
s
e
r
 
m
e
m
o
r
y
 
(
n
o
t
 
s
e
r
v
e
r
)


-
 
A
N
D
 
e
x
p
o
r
t
 
d
o
w
n
l
o
a
d
s
 
a
r
e
 
c
l
i
e
n
t
-
s
i
d
e
 
(
f
i
l
e
 
g
e
n
e
r
a
t
e
d
 
l
o
c
a
l
l
y
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
 
P
l
u
g
i
n
 
a
n
d
 
s
t
e
n
c
i
l
 
s
u
p
p
o
r
t




D
r
a
w
.
i
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
 
t
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
 
p
l
u
g
i
n
s
 
a
n
d
 
c
u
s
t
o
m
 
s
t
e
n
c
i
l
s
 
v
i
a
 
e
x
t
e
r
n
a
l


C
D
N
s
 
a
n
d
 
l
o
c
a
l
 
f
i
l
e
 
l
o
a
d
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
l
u
g
i
n
 
l
o
a
d
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
 
e
n
a
b
l
i
n
g
 
a
 
p
l
u
g
i
n
 
i
n
 
D
r
a
w
.
i
o
 
s
e
t
t
i
n
g
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
 
r
e
q
u
e
s
t
s
 
p
l
u
g
i
n
 
U
R
L
 
(
e
.
g
.
,
 
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
l
u
g
i
n
s
.
d
r
a
w
.
i
o
/
`
)


-
 
T
H
E
N
 
D
r
a
w
.
j
s
 
f
e
t
c
h
e
s
 
p
l
u
g
i
n
 
v
i
a
 
H
T
T
P
 
G
E
T


-
 
A
N
D
 
p
l
u
g
i
n
 
l
o
a
d
s
 
i
n
t
o
 
b
r
o
w
s
e
r
 
m
e
m
o
r
y


-
 
A
N
D
 
p
l
u
g
i
n
 
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
u
s
t
o
m
 
s
t
e
n
c
i
l
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
 
a
d
d
i
n
g
 
c
u
s
t
o
m
 
s
t
e
n
c
i
l
s
 
t
o
 
D
r
a
w
.
i
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
 
i
m
p
o
r
t
s
 
s
t
e
n
c
i
l
 
f
i
l
e
 
(
J
S
O
N
/
X
M
L
)


-
 
T
H
E
N
 
s
t
e
n
c
i
l
s
 
a
r
e
 
r
e
n
d
e
r
e
d
 
c
l
i
e
n
t
-
s
i
d
e


-
 
A
N
D
 
s
t
e
n
c
i
l
s
 
a
r
e
 
s
t
o
r
e
d
 
i
n
 
b
r
o
w
s
e
r
 
l
o
c
a
l
 
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
 
s
t
e
n
c
i
l
s
 
a
r
e
 
a
v
a
i
l
a
b
l
e
 
a
c
r
o
s
s
 
b
r
o
w
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




D
r
a
w
.
i
o
 
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
 
w
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
 
f
o
r
 
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
 
P
o
r
t
a
l
 
t
i
l
e
 
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
 
D
r
a
w
.
i
o
 
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
 
a
 
t
i
l
e
 
i
s
 
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
 
b
a
r


-
 
A
N
D
 
t
i
l
e
 
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
d
r
a
w
i
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
`


-
 
A
N
D
 
t
i
l
e
 
i
c
o
n
 
i
s
 
D
r
a
w
.
i
o
 
l
o
g
o
 
(
d
a
t
a
:
i
m
a
g
e
/
s
v
g
+
x
m
l
;
b
a
s
e
6
4
)


-
 
A
N
D
 
t
i
l
e
 
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
 
i
s
 
"
S
t
a
t
e
l
e
s
s
 
d
i
a
g
r
a
m
 
e
d
i
t
o
r
 
(
n
o
 
a
u
t
h
,
 
n
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
c
e
)
"


-
 
A
N
D
 
c
l
i
c
k
i
n
g
 
t
h
e
 
t
i
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
 
D
r
a
w
.
i
o
 
m
a
i
n
 
p
a
g
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
t
o
r
a
g
e
 
a
n
d
 
b
a
c
k
u
p
 
p
o
l
i
c
y




D
r
a
w
.
i
o
 
S
H
A
L
L
 
N
O
T
 
r
e
q
u
i
r
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
t
 
s
t
o
r
a
g
e
 
b
y
 
d
e
s
i
g
n
,
 
b
u
t
 
s
u
p
p
o
r
t


e
x
t
e
r
n
a
l
 
s
t
o
r
a
g
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
 
P
V
C
 
r
e
q
u
i
r
e
d


-
 
G
I
V
E
N
 
D
r
a
w
.
i
o
 
s
t
a
t
e
l
e
s
s
 
d
e
s
i
g
n


-
 
T
H
E
N
 
n
o
 
P
V
C
 
i
s
 
r
e
q
u
i
r
e
d
 
(
n
o
 
d
a
t
a
 
t
o
 
p
e
r
s
i
s
t
)


-
 
A
N
D
 
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
t
a
r
t
s
 
a
r
e
 
f
a
s
t
 
(
n
o
 
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
 
s
y
n
c
)


-
 
A
N
D
 
H
P
A
 
c
a
n
 
s
c
a
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
 
w
i
t
h
o
u
t
 
d
a
t
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
c
y
 
c
o
n
c
e
r
n
s


-
 
A
N
D
 
n
o
 
b
a
c
k
u
p
 
i
s
 
n
e
e
d
e
d
 
(
d
a
t
a
 
i
s
 
c
l
i
e
n
t
-
s
i
d
e
 
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
 
N
e
x
t
c
l
o
u
d
 
e
x
p
o
r
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
 
e
x
p
o
r
t
i
n
g
 
a
 
d
i
a
g
r
a
m
 
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


-
 
W
H
E
N
 
F
i
l
e
 
→
 
S
a
v
e
 
→
 
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
s
 
s
e
l
e
c
t
e
d


-
 
T
H
E
N
 
D
r
a
w
.
i
o
 
p
r
o
m
p
t
s
 
f
o
r
 
N
e
x
t
c
l
o
u
d
 
l
o
g
i
n
 
(
O
I
D
C
)


-
 
A
N
D
 
d
i
a
g
r
a
m
 
f
i
l
e
 
i
s
 
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
 
N
e
x
t
c
l
o
u
d
 
S
3
 
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
l
u
d
e
s
 
d
i
a
g
r
a
m
 
t
y
p
e
 
a
n
d
 
l
a
s
t
 
m
o
d
i
f
i
e
d
 
t
i
m
e
s
t
a
m
p


-
 
A
N
D
 
d
i
a
g
r
a
m
 
c
a
n
 
b
e
 
o
p
e
n
e
d
 
f
r
o
m
 
N
e
x
t
c
l
o
u
d
 
v
i
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
 
D
r
a
w
.
i
o
 
a
p
p




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




D
r
a
w
.
i
o
 
r
e
q
u
i
r
e
s
 
N
O
 
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
 
a
n
d
 
p
e
r
s
i
s
t
s
 
N
O
 
d
a
t
a
 
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
.


D
i
a
g
r
a
m
 
s
t
a
t
e
 
i
s
 
e
n
c
o
d
e
d
 
i
n
 
t
h
e
 
U
R
L
 
f
r
a
g
m
e
n
t
 
(
c
l
i
e
n
t
-
s
i
d
e
 
o
n
l
y
)
.


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
u
t
 
h
a
s
 
n
o
 
u
s
e
r
-
f
a
c
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
 
i
m
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
.




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
t
a
t
i
c
 
f
i
l
e
 
s
e
r
v
e
r
 
(
n
g
i
n
x
)
 
|
 
1
0
0
1
 
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
,
 
t
e
r
m
i
n
a
t
e
s
 
T
L
S
,
 
s
e
t
s
 
`
X
-
F
o
r
w
a
r
d
e
d
-
H
o
s
t
`
,
 
`
X
-
F
o
r
w
a
r
d
e
d
-
P
r
o
t
o
`
)


-
 
L
o
a
d
 
b
a
l
a
n
c
e
r
 
(
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
 
I
P
,
 
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




*
*
E
x
t
e
r
n
a
l
 
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
 
E
x
t
e
r
n
a
l
 
i
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
 
f
o
r
 
p
l
u
g
i
n
/
s
t
e
n
c
i
l
 
C
D
N
 
d
o
w
n
l
o
a
d
s


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
 
(
o
p
t
i
o
n
a
l
,
 
f
o
r
 
d
i
a
g
r
a
m
 
e
x
p
o
r
t
 
s
a
v
e
 
t
a
r
g
e
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
 
o
n
l
y
 
—
 
n
o
 
d
a
t
a
 
f
l
o
w
)


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
 
(
e
x
t
e
r
n
a
l
 
e
x
p
o
r
t
 
t
a
r
g
e
t
 
s
a
v
e
 
d
e
s
t
i
n
a
t
i
o
n
 
f
o
r
 
d
i
a
g
r
a
m
s
)


-
 
E
x
t
e
r
n
a
l
 
p
l
u
g
i
n
/
s
t
e
n
c
i
l
 
C
D
N
s
 
(
f
o
r
 
t
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
 
e
x
t
e
n
s
i
o
n
s
)




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
 
N
o
n
e
 
(
n
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
i
o
n
,
 
n
o
 
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
 
A
P
I
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
 
N
o
n
e
 
(
p
u
b
l
i
c
 
a
c
c
e
s
s
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
 
N
o
n
e
 
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
 
N
o
n
e
 
(
s
t
a
t
e
l
e
s
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
 
N
o
n
e
 
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
d
r
a
w
i
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
 
I
m
a
g
e
 
|
 
`
j
g
r
a
p
h
/
d
r
a
w
i
o
:
l
a
t
e
s
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
 
H
T
T
P
 
8
0
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
/
r
e
a
d
i
n
e
s
s
 
o
n
 
`
/
`
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
 
`
d
r
a
w
i
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
`
 
(
H
A
P
r
o
x
y
,
 
s
e
t
s
 
`
X
-
F
o
r
w
a
r
d
e
d
-
H
o
s
t
`
)
 
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
.
d
r
o
p
:
 
[
A
L
L
]
`
 
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
 
`
c
p
u
:
 
2
0
0
m
/
1
 
c
o
r
e
`
,
 
`
m
e
m
o
r
y
:
 
5
1
2
M
i
/
2
G
i
`
 
|


|
 
S
t
a
t
i
c
 
f
i
l
e
s
 
|
 
P
r
e
c
o
m
p
i
l
e
d
 
H
T
M
L
/
J
S
/
C
S
S
 
(
n
o
 
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
 
r
e
n
d
e
r
i
n
g
)
 
|


|
 
S
u
p
p
o
r
t
e
d
 
f
o
r
m
a
t
s
 
|
 
F
l
o
w
 
c
h
a
r
t
,
 
U
M
L
,
 
E
R
 
d
i
a
g
r
a
m
,
 
N
e
t
w
o
r
k
 
d
i
a
g
r
a
m
,
 
O
r
g
a
n
i
z
a
t
i
o
n
 
c
h
a
r
t
 
|


|
 
E
x
p
o
r
t
 
f
o
r
m
a
t
s
 
|
 
P
N
G
,
 
S
V
G
,
 
P
D
F
,
 
X
M
L
,
 
V
S
D
X
 
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




-
 
*
*
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
c
e
 
b
y
 
d
e
s
i
g
n
*
*
:
 
D
r
a
w
.
i
o
 
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
.
 
U
s
e
r
s
 
M
U
S
T
 
e
x
p
o
r
t
/
s
a
v
e


 
 
d
i
a
g
r
a
m
s
 
l
o
c
a
l
l
y
.
 
U
s
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
 
o
r
 
G
i
t
 
r
e
p
o
s
i
t
o
r
i
e
s
 
f
o
r
 
s
h
a
r
e
d
 
s
t
o
r
a
g
e
.


-
 
*
*
H
T
T
P
 
p
o
r
t
 
8
0
8
0
*
*
:
 
D
r
a
w
.
i
o
 
u
s
e
s
 
H
T
T
P
 
(
n
o
t
 
H
T
T
P
S
)
 
i
n
t
e
r
n
a
l
l
y
.
 
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


 
 
t
e
r
m
i
n
a
t
e
s
 
T
L
S
 
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
o
 
p
o
r
t
 
8
0
8
0
 
w
i
t
h
 
`
X
-
F
o
r
w
a
r
d
e
d
-
H
o
s
t
`
.


-
 
*
*
X
-
F
o
r
w
a
r
d
e
d
-
H
o
s
t
 
r
e
q
u
i
r
e
d
*
*
:
 
W
i
t
h
o
u
t
 
`
X
-
F
o
r
w
a
r
d
e
d
-
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
 
D
r
a
w
.
j
s
 
t
o
o
l
s


 
 
a
n
d
 
p
l
u
g
i
n
s
 
g
e
n
e
r
a
t
e
 
b
r
o
k
e
n
 
i
n
t
e
r
n
a
l
 
U
R
L
s
 
(
m
u
s
t
 
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
 
i
n
 
H
A
P
r
o
x
y
)
.


-
 
*
*
P
u
b
l
i
c
 
a
c
c
e
s
s
*
*
:
 
N
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
i
o
n
 
i
s
 
r
e
q
u
i
r
e
d
 
b
y
 
d
e
s
i
g
n
.
 
A
n
y
o
n
e
 
w
i
t
h
 
t
h
e
 
U
R
L
 
c
a
n
 
a
c
c
e
s
s
 
D
r
a
w
.
i
o
.


-
 
*
*
N
o
 
r
e
a
l
-
t
i
m
e
 
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
o
n
*
*
:
 
M
u
l
t
i
p
l
e
 
u
s
e
r
s
 
c
a
n
n
o
t
 
e
d
i
t
 
t
h
e
 
s
a
m
e
 
d
i
a
g
r
a
m
 
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
 
L
o
w
 
(
s
t
a
t
e
l
e
s
s
 
d
i
a
g
r
a
m
 
e
d
i
t
o
r
,
 
p
u
b
l
i
c
 
a
c
c
e
s
s
,
 
m
i
n
i
m
a
l
 
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
0
%
 
(
7
.
2
 
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
 
N
g
i
n
x
 
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
 
N
g
i
n
x
 
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
 
D
r
a
w
.
i
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
2
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
3
 
a
l
e
r
t


-
 
P
o
d
 
c
r
a
s
h
 
l
o
o
p
 
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
s
t
a
t
e
l
e
s
s
,
 
e
a
s
i
l
y
 
s
c
a
l
a
b
l
e
)


-
 
1
0
,
0
0
0
 
p
a
g
e
 
l
o
a
d
s
 
p
e
r
 
d
a
y




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
 
L
o
w
 
(
R
P
O
:
 
N
/
A
 
-
 
s
t
a
t
e
l
e
s
s
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
U
s
e
r
 
d
a
t
a
*
*
:
 
N
O
N
E
 
(
s
t
a
t
e
l
e
s
s
 
s
e
r
v
i
c
e
,
 
a
l
l
 
d
a
t
a
 
c
l
i
e
n
t
-
s
i
d
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
r
a
w
.
i
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


2
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
p
a
g
e
 
l
o
a
d
,
 
d
i
a
g
r
a
m
 
r
e
n
d
e
r
i
n
g
)
 
-
 
5
 
m
i
n


3
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
 
5
 
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
 
N
o
n
e
 
(
s
t
a
t
e
l
e
s
s
 
s
e
r
v
i
c
e
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
P
o
d
 
c
r
a
s
h
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
 
(
n
o
 
d
a
t
a
 
t
o
 
r
e
s
t
o
r
e
)

