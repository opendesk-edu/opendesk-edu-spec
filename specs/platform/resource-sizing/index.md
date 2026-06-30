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
 
R
e
s
o
u
r
c
e
 
S
i
z
i
n
g
 
B
a
s
e
l
i
n
e
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




D
e
f
i
n
e
s
 
r
e
c
o
m
m
e
n
d
e
d
 
C
P
U
 
a
n
d
 
m
e
m
o
r
y
 
r
e
s
o
u
r
c
e
 
r
e
q
u
e
s
t
s
 
a
n
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
 
a
l
l


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
 
s
e
r
v
i
c
e
s
.
 
T
h
e
s
e
 
b
a
s
e
l
i
n
e
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
r
o
m
 
o
b
s
e
r
v
e
d
 
u
s
a
g
e
 
i
n


t
h
e
 
H
R
Z
 
K
3
s
 
c
l
u
s
t
e
r
 
(
9
 
n
o
d
e
s
:
 
3
 
c
o
n
t
r
o
l
-
p
l
a
n
e
,
 
6
 
w
o
r
k
e
r
s
)
 
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


t
h
e
 
m
i
n
i
m
u
m
 
v
i
a
b
l
e
 
s
i
z
i
n
g
 
f
o
r
 
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
 
w
o
r
k
l
o
a
d
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
 
E
x
a
c
t
 
c
o
s
t
 
c
a
l
c
u
l
a
t
i
o
n
s
 
(
d
e
p
e
n
d
s
 
o
n
 
n
o
d
e
 
p
r
i
c
i
n
g
 
m
o
d
e
l
)


-
 
D
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
/
s
t
a
g
i
n
g
 
s
i
z
i
n
g
 
(
u
s
e
 
l
o
w
e
r
 
v
a
l
u
e
s
)


-
 
A
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
 
p
o
l
i
c
i
e
s
 
(
s
e
e
 
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
 
s
p
e
c
s
 
f
o
r
 
H
P
A
/
V
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
a
t
i
o
n
)




-
-
-




#
#
 
R
e
s
o
u
r
c
e
 
P
o
l
i
c
y




-
 
*
*
R
e
q
u
e
s
t
s
*
*
:
 
G
u
a
r
a
n
t
e
e
d
 
m
i
n
i
m
u
m
 
r
e
s
o
u
r
c
e
s
 
—
 
p
o
d
 
i
s
 
s
c
h
e
d
u
l
e
d
 
o
n
l
y
 
w
h
e
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


-
 
*
*
L
i
m
i
t
s
*
*
:
 
M
a
x
i
m
u
m
 
r
e
s
o
u
r
c
e
s
 
a
 
p
o
d
 
c
a
n
 
c
o
n
s
u
m
e
 
—
 
p
o
d
 
i
s
 
O
O
M
-
k
i
l
l
e
d
 
o
r
 
C
P
U
-
t
h
r
o
t
t
l
e
d
 
a
t
 
l
i
m
i
t


-
 
*
*
R
a
t
i
o
*
*
:
 
C
P
U
 
r
e
q
u
e
s
t
:
l
i
m
i
t
 
S
H
O
U
L
D
 
b
e
 
1
:
2
 
t
o
 
1
:
4
 
(
a
l
l
o
w
 
b
u
r
s
t
 
w
i
t
h
o
u
t
 
o
v
e
r
c
o
m
m
i
t
t
i
n
g
)


-
 
*
*
M
e
m
o
r
y
*
*
:
 
R
e
q
u
e
s
t
 
S
H
O
U
L
D
 
b
e
 
7
0
-
8
0
%
 
o
f
 
l
i
m
i
t
 
(
p
r
e
v
e
n
t
 
O
O
M
 
k
i
l
l
s
 
d
u
r
i
n
g
 
n
o
r
m
a
l
 
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


-
 
*
*
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
*
*
:
 
A
l
e
r
t
 
w
h
e
n
 
`
c
o
n
t
a
i
n
e
r
_
m
e
m
o
r
y
_
w
o
r
k
i
n
g
_
s
e
t
_
b
y
t
e
s
 
>
 
8
5
%
`
 
o
f
 
l
i
m
i
t
 
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




-
-
-




#
#
 
S
e
r
v
i
c
e
 
R
e
s
o
u
r
c
e
 
B
a
s
e
l
i
n
e
s




#
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
 
S
e
r
v
i
c
e
s




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
P
U
 
R
e
q
u
e
s
t
 
|
 
C
P
U
 
L
i
m
i
t
 
|
 
M
e
m
o
r
y
 
R
e
q
u
e
s
t
 
|
 
M
e
m
o
r
y
 
L
i
m
i
t
 
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
 
5
0
0
m
 
|
 
2
 
|
 
1
G
i
 
|
 
2
G
i
 
|
 
1
 
|
 
R
B
D
 
5
G
i
 
|
 
S
i
n
g
l
e
 
i
n
s
t
a
n
c
e
,
 
n
o
 
H
P
A
 
|


|
 
O
p
e
n
L
D
A
P
 
|
 
2
5
0
m
 
|
 
1
 
|
 
2
5
6
M
i
 
|
 
5
1
2
M
i
 
|
 
1
 
|
 
R
B
D
 
1
G
i
 
|
 
S
i
n
g
l
e
 
i
n
s
t
a
n
c
e
 
|


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
s
h
a
r
e
d
)
 
|
 
1
 
|
 
2
 
|
 
2
G
i
 
|
 
4
G
i
 
|
 
1
 
|
 
R
B
D
 
2
0
G
i
 
|
 
1
2
 
d
a
t
a
b
a
s
e
s
 
o
n
 
o
n
e
 
c
l
u
s
t
e
r
 
|


|
 
M
a
r
i
a
D
B
 
(
s
h
a
r
e
d
)
 
|
 
1
 
|
 
2
 
|
 
2
G
i
 
|
 
4
G
i
 
|
 
1
 
|
 
R
B
D
 
2
0
G
i
 
|
 
6
 
d
a
t
a
b
a
s
e
s
 
o
n
 
o
n
e
 
c
l
u
s
t
e
r
 
|


|
 
R
e
d
i
s
 
|
 
2
5
0
m
 
|
 
5
0
0
m
 
|
 
2
5
6
M
i
 
|
 
5
1
2
M
i
 
|
 
1
 
|
 
R
B
D
 
1
G
i
 
|
 
S
i
n
g
l
e
 
i
n
s
t
a
n
c
e
,
 
S
e
n
t
i
n
e
l
 
o
p
t
i
o
n
a
l
 
|


|
 
M
i
n
I
O
 
|
 
5
0
0
m
 
|
 
2
 
|
 
1
G
i
 
|
 
2
G
i
 
|
 
4
 
|
 
R
B
D
 
1
0
0
G
i
 
(
e
a
c
h
)
 
|
 
4
-
n
o
d
e
 
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
d
 
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
 
|
 
5
0
0
m
 
|
 
2
 
|
 
2
5
6
M
i
 
|
 
1
G
i
 
|
 
2
+
 
|
 
N
o
n
e
 
|
 
D
a
e
m
o
n
S
e
t
 
o
n
 
w
o
r
k
e
r
 
n
o
d
e
s
 
|


|
 
C
e
r
t
 
M
a
n
a
g
e
r
 
|
 
1
0
0
m
 
|
 
2
5
0
m
 
|
 
1
2
8
M
i
 
|
 
2
5
6
M
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
|


|
 
C
o
r
e
D
N
S
 
|
 
2
5
0
m
 
|
 
5
0
0
m
 
|
 
2
5
6
M
i
 
|
 
5
1
2
M
i
 
|
 
2
 
|
 
N
o
n
e
 
|
 
|




#
#
#
 
C
o
r
e
 
S
e
r
v
i
c
e
s




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
P
U
 
R
e
q
u
e
s
t
 
|
 
C
P
U
 
L
i
m
i
t
 
|
 
M
e
m
o
r
y
 
R
e
q
u
e
s
t
 
|
 
M
e
m
o
r
y
 
L
i
m
i
t
 
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
 
5
0
0
m
 
|
 
1
 
|
 
5
1
2
M
i
 
|
 
1
G
i
 
|
 
2
 
|
 
N
o
n
e
 
|
 
S
t
a
t
e
l
e
s
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
 
A
I
O
 
|
 
1
 
|
 
4
 
|
 
2
G
i
 
|
 
8
G
i
 
|
 
1
 
|
 
C
e
p
h
F
S
 
1
0
0
G
i
 
|
 
S
i
n
g
l
e
 
A
I
O
 
c
o
n
t
a
i
n
e
r
 
(
P
H
P
-
F
P
M
 
+
 
N
g
i
n
x
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
 
|
 
1
0
0
m
 
|
 
5
0
0
m
 
|
 
1
2
8
M
i
 
|
 
2
5
6
M
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
S
i
d
e
c
a
r
,
 
s
m
a
l
l
 
f
o
o
t
p
r
i
n
t
 
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
 
E
x
p
o
r
t
e
r
 
|
 
5
0
m
 
|
 
1
0
0
m
 
|
 
6
4
M
i
 
|
 
1
2
8
M
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
M
e
t
r
i
c
s
 
o
n
l
y
 
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
 
5
0
0
m
 
|
 
2
 
|
 
1
G
i
 
|
 
2
G
i
 
|
 
2
 
|
 
C
e
p
h
F
S
 
1
0
0
G
i
 
|
 
2
 
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
 
H
A
 
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
 
1
 
|
 
4
 
|
 
2
G
i
 
|
 
4
G
i
 
|
 
2
 
|
 
C
e
p
h
F
S
 
1
0
0
G
i
 
|
 
M
e
m
o
r
y
-
h
e
a
v
y
 
(
J
a
v
a
)
 
|


|
 
S
O
G
o
 
|
 
5
0
0
m
 
|
 
2
 
|
 
5
1
2
M
i
 
|
 
2
G
i
 
|
 
2
 
|
 
N
o
n
e
 
|
 
M
o
d
e
r
a
t
e
 
m
e
m
o
r
y
 
|


|
 
E
l
e
m
e
n
t
 
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
 
5
0
0
m
 
|
 
2
 
|
 
1
G
i
 
|
 
2
G
i
 
|
 
1
 
|
 
C
e
p
h
F
S
 
5
0
G
i
 
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
-
a
w
a
r
e
 
s
i
z
i
n
g
 
|


|
 
X
W
i
k
i
 
|
 
5
0
0
m
 
|
 
2
 
|
 
1
G
i
 
|
 
2
G
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
J
a
v
a
-
b
a
s
e
d
 
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
 
5
0
0
m
 
|
 
2
 
|
 
2
G
i
 
|
 
4
G
i
 
|
 
1
 
|
 
C
e
p
h
F
S
 
5
0
G
i
 
|
 
R
u
b
y
 
+
 
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
 
|




#
#
#
 
E
d
u
c
a
t
i
o
n
 
S
e
r
v
i
c
e
s




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
P
U
 
R
e
q
u
e
s
t
 
|
 
C
P
U
 
L
i
m
i
t
 
|
 
M
e
m
o
r
y
 
R
e
q
u
e
s
t
 
|
 
M
e
m
o
r
y
 
L
i
m
i
t
 
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
|


|
 
I
L
I
A
S
 
|
 
5
0
0
m
 
|
 
2
 
|
 
1
G
i
 
|
 
2
G
i
 
|
 
1
 
|
 
C
e
p
h
F
S
 
8
G
i
 
+
 
C
e
p
h
F
S
 
8
G
i
 
|
 
P
H
P
-
h
e
a
v
y
,
 
L
u
c
e
n
e
 
s
i
d
e
c
a
r
 
a
d
d
s
 
~
5
1
2
M
i
 
|


|
 
M
o
o
d
l
e
 
|
 
5
0
0
m
 
|
 
2
 
|
 
1
G
i
 
|
 
2
G
i
 
|
 
2
 
|
 
C
e
p
h
F
S
 
8
G
i
 
|
 
P
H
P
-
b
a
s
e
d
,
 
m
o
d
e
r
a
t
e
 
l
o
a
d
 
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
 
(
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
)
 
|
 
2
5
0
m
 
|
 
1
 
|
 
5
1
2
M
i
 
|
 
1
G
i
 
|
 
2
 
|
 
C
e
p
h
F
S
 
5
0
0
G
i
 
|
 
R
e
c
o
r
d
i
n
g
s
 
o
n
 
C
e
p
h
F
S
 
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
 
2
5
0
m
 
|
 
5
0
0
m
 
|
 
2
5
6
M
i
 
|
 
5
1
2
M
i
 
|
 
1
 
|
 
R
B
D
 
4
G
i
 
|
 
L
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
 
2
5
0
m
 
|
 
5
0
0
m
 
|
 
2
5
6
M
i
 
|
 
5
1
2
M
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
L
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
 
P
H
P
 
|




#
#
#
 
C
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
 
S
e
r
v
i
c
e
s




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
P
U
 
R
e
q
u
e
s
t
 
|
 
C
P
U
 
L
i
m
i
t
 
|
 
M
e
m
o
r
y
 
R
e
q
u
e
s
t
 
|
 
M
e
m
o
r
y
 
L
i
m
i
t
 
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
 
1
 
|
 
4
 
|
 
2
G
i
 
|
 
4
G
i
 
|
 
2
 
|
 
N
o
n
e
 
|
 
C
P
U
-
h
e
a
v
y
 
(
L
i
b
r
e
O
f
f
i
c
e
 
k
i
t
)
,
 
d
o
c
 
i
s
o
l
a
t
i
o
n
 
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
 
2
5
0
m
 
|
 
1
 
|
 
5
1
2
M
i
 
|
 
1
G
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
N
o
d
e
.
j
s
,
 
m
o
d
e
r
a
t
e
 
|


|
 
N
o
t
e
s
 
|
 
1
0
0
m
 
|
 
2
5
0
m
 
|
 
1
2
8
M
i
 
|
 
2
5
6
M
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
L
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
 
|


|
 
P
l
a
n
k
a
 
|
 
2
5
0
m
 
|
 
5
0
0
m
 
|
 
2
5
6
M
i
 
|
 
5
1
2
M
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
N
o
d
e
.
j
s
 
|




#
#
#
 
S
u
p
p
o
r
t
 
S
e
r
v
i
c
e
s




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
P
U
 
R
e
q
u
e
s
t
 
|
 
C
P
U
 
L
i
m
i
t
 
|
 
M
e
m
o
r
y
 
R
e
q
u
e
s
t
 
|
 
M
e
m
o
r
y
 
L
i
m
i
t
 
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
|


|
 
Z
a
m
m
a
d
 
|
 
5
0
0
m
 
|
 
2
 
|
 
1
G
i
 
|
 
2
G
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
R
u
b
y
 
o
n
 
R
a
i
l
s
 
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
 
2
5
0
m
 
|
 
5
0
0
m
 
|
 
5
1
2
M
i
 
|
 
1
G
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
P
H
P
 
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
 
1
0
0
m
 
|
 
2
5
0
m
 
|
 
1
2
8
M
i
 
|
 
2
5
6
M
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
L
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
 
P
H
P
 
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
 
5
0
0
m
 
|
 
2
 
|
 
1
G
i
 
|
 
2
G
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
P
H
P
 
|


|
 
C
l
a
m
A
V
 
(
D
i
s
t
r
i
b
u
t
e
d
)
 
|
 
1
 
|
 
2
 
|
 
2
G
i
 
|
 
4
G
i
 
|
 
2
 
|
 
C
e
p
h
F
S
 
1
0
G
i
 
|
 
M
e
m
o
r
y
-
h
e
a
v
y
 
(
s
i
g
n
a
t
u
r
e
 
D
B
)
 
|


|
 
D
o
v
e
c
o
t
 
|
 
2
5
0
m
 
|
 
1
 
|
 
5
1
2
M
i
 
|
 
1
G
i
 
|
 
2
 
|
 
C
e
p
h
F
S
 
5
0
G
i
 
|
 
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
 
|


|
 
P
o
s
t
f
i
x
 
|
 
1
0
0
m
 
|
 
5
0
0
m
 
|
 
2
5
6
M
i
 
|
 
5
1
2
M
i
 
|
 
2
 
|
 
N
o
n
e
 
|
 
M
a
i
l
 
r
e
l
a
y
 
|




#
#
#
 
S
t
a
t
e
l
e
s
s
 
T
o
o
l
s




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
P
U
 
R
e
q
u
e
s
t
 
|
 
C
P
U
 
L
i
m
i
t
 
|
 
M
e
m
o
r
y
 
R
e
q
u
e
s
t
 
|
 
M
e
m
o
r
y
 
L
i
m
i
t
 
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
 
1
0
0
m
 
|
 
2
5
0
m
 
|
 
1
2
8
M
i
 
|
 
2
5
6
M
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
F
u
l
l
y
 
s
t
a
t
e
l
e
s
s
 
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
 
1
0
0
m
 
|
 
2
5
0
m
 
|
 
1
2
8
M
i
 
|
 
2
5
6
M
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
F
u
l
l
y
 
s
t
a
t
e
l
e
s
s
 
|


|
 
J
i
t
s
i
 
|
 
5
0
0
m
 
|
 
2
 
|
 
1
G
i
 
|
 
2
G
i
 
|
 
1
 
|
 
N
o
n
e
 
|
 
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
 
B
B
B
 
|




-
-
-




#
#
 
T
o
t
a
l
 
C
l
u
s
t
e
r
 
R
e
s
o
u
r
c
e
 
E
s
t
i
m
a
t
e




#
#
#
 
R
e
s
o
u
r
c
e
 
R
e
q
u
e
s
t
s
 
(
G
u
a
r
a
n
t
e
e
d
)




|
 
C
a
t
e
g
o
r
y
 
|
 
C
P
U
 
(
c
o
r
e
s
)
 
|
 
M
e
m
o
r
y
 
(
G
i
B
)
 
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


|
 
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
 
|
 
~
5
.
5
 
|
 
~
1
0
 
|


|
 
C
o
r
e
 
S
e
r
v
i
c
e
s
 
|
 
~
6
.
5
 
|
 
~
2
2
 
|


|
 
E
d
u
c
a
t
i
o
n
 
S
e
r
v
i
c
e
s
 
|
 
~
3
.
5
 
|
 
~
7
.
5
 
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
t
i
o
n
 
S
e
r
v
i
c
e
s
 
|
 
~
2
 
|
 
~
6
.
5
 
|


|
 
S
u
p
p
o
r
t
 
S
e
r
v
i
c
e
s
 
|
 
~
4
 
|
 
~
1
2
 
|


|
 
S
t
a
t
e
l
e
s
s
 
T
o
o
l
s
 
|
 
~
0
.
5
 
|
 
~
0
.
7
5
 
|


|
 
*
*
T
o
t
a
l
 
R
e
q
u
e
s
t
s
*
*
 
|
 
*
*
~
2
2
*
*
 
|
 
*
*
~
5
9
*
*
 
|




#
#
#
 
R
e
s
o
u
r
c
e
 
L
i
m
i
t
s
 
(
M
a
x
i
m
u
m
)




|
 
C
a
t
e
g
o
r
y
 
|
 
C
P
U
 
(
c
o
r
e
s
)
 
|
 
M
e
m
o
r
y
 
(
G
i
B
)
 
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


|
 
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
 
|
 
~
1
6
 
|
 
~
1
6
 
|


|
 
C
o
r
e
 
S
e
r
v
i
c
e
s
 
|
 
~
2
8
 
|
 
~
5
5
 
|


|
 
E
d
u
c
a
t
i
o
n
 
S
e
r
v
i
c
e
s
 
|
 
~
1
3
 
|
 
~
1
5
 
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
t
i
o
n
 
S
e
r
v
i
c
e
s
 
|
 
~
9
 
|
 
~
1
3
 
|


|
 
S
u
p
p
o
r
t
 
S
e
r
v
i
c
e
s
 
|
 
~
1
2
 
|
 
~
2
4
 
|


|
 
S
t
a
t
e
l
e
s
s
 
T
o
o
l
s
 
|
 
~
1
.
5
 
|
 
~
1
.
5
 
|


|
 
*
*
T
o
t
a
l
 
L
i
m
i
t
s
*
*
 
|
 
*
*
~
8
0
*
*
 
|
 
*
*
~
1
2
5
*
*
 
|




#
#
#
 
N
o
d
e
 
C
a
p
a
c
i
t
y
 
(
H
R
Z
 
C
l
u
s
t
e
r
)




-
 
*
*
3
 
c
o
n
t
r
o
l
-
p
l
a
n
e
 
n
o
d
e
s
*
*
:
 
4
 
c
o
r
e
s
,
 
8
G
i
B
 
e
a
c
h
 
(
n
o
t
 
f
o
r
 
w
o
r
k
l
o
a
d
s
)


-
 
*
*
6
 
w
o
r
k
e
r
 
n
o
d
e
s
*
*
:
 
V
a
r
i
a
b
l
e
 
s
i
z
i
n
g
 
(
v
e
r
i
f
y
 
w
i
t
h
 
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
s
c
r
i
b
e
 
n
o
d
e
s
`
)


-
 
*
*
R
e
c
o
m
m
e
n
d
e
d
*
*
:
 
M
i
n
i
m
u
m
 
8
 
c
o
r
e
s
,
 
1
6
G
i
B
 
p
e
r
 
w
o
r
k
e
r
 
n
o
d
e
 
f
o
r
 
f
u
l
l
 
E
d
u
 
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
 
*
*
O
v
e
r
c
o
m
m
i
t
 
r
a
t
i
o
*
*
:
 
R
e
q
u
e
s
t
s
:
C
a
p
a
c
i
t
y
 
S
H
O
U
L
D
 
b
e
 
<
 
0
.
8
 
f
o
r
 
C
P
U
,
 
<
 
0
.
9
 
f
o
r
 
m
e
m
o
r
y




-
-
-




#
#
 
S
i
z
i
n
g
 
G
u
i
d
e
l
i
n
e
s




#
#
#
 
W
h
e
n
 
t
o
 
I
n
c
r
e
a
s
e
 
R
e
s
o
u
r
c
e
s




-
 
C
o
n
t
a
i
n
e
r
 
C
P
U
 
t
h
r
o
t
t
l
i
n
g
 
>
 
5
0
%
 
o
f
 
t
i
m
e
 
f
o
r
 
1
0
+
 
m
i
n
u
t
e
s
 
→
 
i
n
c
r
e
a
s
e
 
C
P
U
 
l
i
m
i
t


-
 
C
o
n
t
a
i
n
e
r
 
O
O
M
 
k
i
l
l
s
 
o
c
c
u
r
r
i
n
g
 
→
 
i
n
c
r
e
a
s
e
 
m
e
m
o
r
y
 
l
i
m
i
t


-
 
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
 
p
r
o
b
e
 
f
a
i
l
u
r
e
s
 
→
 
i
n
v
e
s
t
i
g
a
t
e
 
b
e
f
o
r
e
 
i
n
c
r
e
a
s
i
n
g
 
(
u
s
u
a
l
l
y
 
n
o
t
 
a
 
r
e
s
o
u
r
c
e
 
i
s
s
u
e
)


-
 
H
i
g
h
 
P
9
9
 
l
a
t
e
n
c
y
 
(
>
 
2
x
 
P
5
0
)
 
→
 
i
n
v
e
s
t
i
g
a
t
e
 
b
e
f
o
r
e
 
i
n
c
r
e
a
s
i
n
g




#
#
#
 
W
h
e
n
 
t
o
 
D
e
c
r
e
a
s
e
 
R
e
s
o
u
r
c
e
s




-
 
C
o
n
t
a
i
n
e
r
 
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
l
y
 
u
s
e
s
 
<
 
2
0
%
 
o
f
 
C
P
U
 
l
i
m
i
t
 
→
 
d
e
c
r
e
a
s
e
 
C
P
U
 
r
e
q
u
e
s
t


-
 
C
o
n
t
a
i
n
e
r
 
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
l
y
 
u
s
e
s
 
<
 
3
0
%
 
o
f
 
m
e
m
o
r
y
 
l
i
m
i
t
 
→
 
d
e
c
r
e
a
s
e
 
m
e
m
o
r
y
 
r
e
q
u
e
s
t


-
 
N
E
V
E
R
 
d
e
c
r
e
a
s
e
 
b
e
l
o
w
 
o
b
s
e
r
v
e
d
 
p
e
a
k
 
u
s
a
g
e
 
+
 
2
0
%
 
h
e
a
d
r
o
o
m




#
#
#
 
S
t
o
r
a
g
e
 
S
i
z
i
n
g




|
 
S
t
o
r
a
g
e
 
T
y
p
e
 
|
 
S
e
r
v
i
c
e
 
|
 
M
i
n
 
S
i
z
e
 
|
 
G
r
o
w
t
h
 
R
a
t
e
 
|
 
R
e
t
e
n
t
i
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
 
C
e
p
h
F
S
 
R
W
X
 
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
 
1
0
0
G
i
 
|
 
~
5
G
i
/
m
o
n
t
h
 
|
 
I
n
d
e
f
i
n
i
t
e
 
|


|
 
C
e
p
h
F
S
 
R
W
X
 
|
 
B
B
B
 
R
e
c
o
r
d
i
n
g
s
 
|
 
5
0
0
G
i
 
|
 
~
2
0
G
i
/
m
o
n
t
h
 
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
 
r
e
t
e
n
t
i
o
n
 
|


|
 
C
e
p
h
F
S
 
R
W
X
 
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
 
1
0
0
G
i
 
|
 
~
5
G
i
/
m
o
n
t
h
 
|
 
I
n
d
e
f
i
n
i
t
e
 
|


|
 
C
e
p
h
F
S
 
R
W
X
 
|
 
D
o
v
e
c
o
t
 
m
a
i
l
 
|
 
5
0
G
i
 
|
 
~
2
G
i
/
m
o
n
t
h
 
|
 
U
s
e
r
-
m
a
n
a
g
e
d
 
|


|
 
C
e
p
h
F
S
 
R
W
X
 
|
 
E
l
e
m
e
n
t
 
m
e
d
i
a
 
|
 
5
0
G
i
 
|
 
~
2
G
i
/
m
o
n
t
h
 
|
 
I
n
d
e
f
i
n
i
t
e
 
|


|
 
R
B
D
 
R
W
O
 
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
 
|
 
2
0
G
i
 
|
 
~
1
G
i
/
m
o
n
t
h
 
|
 
I
n
d
e
f
i
n
i
t
e
 
|


|
 
R
B
D
 
R
W
O
 
|
 
M
a
r
i
a
D
B
 
|
 
2
0
G
i
 
|
 
~
1
G
i
/
m
o
n
t
h
 
|
 
I
n
d
e
f
i
n
i
t
e
 
|


|
 
R
B
D
 
R
W
O
 
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
 
5
G
i
 
|
 
~
1
0
0
M
i
/
m
o
n
t
h
 
|
 
I
n
d
e
f
i
n
i
t
e
 
|


|
 
R
B
D
 
R
W
O
 
|
 
R
e
d
i
s
 
|
 
1
G
i
 
|
 
~
1
0
0
M
i
/
m
o
n
t
h
 
|
 
N
/
A
 
(
e
p
h
e
m
e
r
a
l
)
 
|




-
-
-




#
#
 
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
 
R
e
s
o
u
r
c
e
 
U
s
a
g
e




V
e
r
i
f
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
i
z
i
n
g
 
w
i
t
h
 
t
h
e
s
e
 
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
 
q
u
e
r
i
e
s
:




`
`
`
p
r
o
m
q
l


#
 
C
P
U
 
u
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
 
p
e
r
 
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
a
t
e
(
c
o
n
t
a
i
n
e
r
_
c
p
u
_
u
s
a
g
e
_
s
e
c
o
n
d
s
_
t
o
t
a
l
{
n
a
m
e
s
p
a
c
e
=
"
o
p
e
n
d
e
s
k
"
}
[
5
m
]
)




#
 
M
e
m
o
r
y
 
u
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
 
p
e
r
 
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
o
n
t
a
i
n
e
r
_
m
e
m
o
r
y
_
w
o
r
k
i
n
g
_
s
e
t
_
b
y
t
e
s
{
n
a
m
e
s
p
a
c
e
=
"
o
p
e
n
d
e
s
k
"
}




#
 
C
P
U
 
t
h
r
o
t
t
l
i
n
g
 
r
a
t
e


r
a
t
e
(
c
o
n
t
a
i
n
e
r
_
c
p
u
_
c
f
s
_
t
h
r
o
t
t
l
e
d
_
p
e
r
i
o
d
s
_
t
o
t
a
l
{
n
a
m
e
s
p
a
c
e
=
"
o
p
e
n
d
e
s
k
"
}
[
5
m
]
)


/
 
r
a
t
e
(
c
o
n
t
a
i
n
e
r
_
c
p
u
_
c
f
s
_
p
e
r
i
o
d
s
_
t
o
t
a
l
{
n
a
m
e
s
p
a
c
e
=
"
o
p
e
n
d
e
s
k
"
}
[
5
m
]
)




#
 
P
V
C
 
u
s
a
g
e


k
u
b
e
l
e
t
_
v
o
l
u
m
e
_
s
t
a
t
s
_
u
s
e
d
_
b
y
t
e
s
 
/
 
k
u
b
e
l
e
t
_
v
o
l
u
m
e
_
s
t
a
t
s
_
c
a
p
a
c
i
t
y
_
b
y
t
e
s


`
`
`




A
l
e
r
t
 
w
h
e
n
 
a
n
y
 
c
o
n
t
a
i
n
e
r
 
e
x
c
e
e
d
s
 
8
5
%
 
o
f
 
i
t
s
 
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
 
f
o
r
 
1
0
+
 
m
i
n
u
t
e
s


(
s
e
e
 
`
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
`
 
f
o
r
 
a
l
e
r
t
 
d
e
f
i
n
i
t
i
o
n
s
)
.

