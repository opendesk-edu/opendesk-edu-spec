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
 
S
e
r
v
i
c
e
 
I
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
 
M
a
t
r
i
x




M
a
p
s
 
r
u
n
t
i
m
e
 
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
,
 
d
a
t
a
 
f
l
o
w
s
,
 
a
n
d
 
s
h
a
r
e
d
 
i
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
.


A
 
c
e
l
l
 
c
o
n
t
a
i
n
s
 
t
h
e
 
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
 
t
y
p
e
;
 
e
m
p
t
y
 
m
e
a
n
s
 
n
o
 
d
i
r
e
c
t
 
i
n
t
e
r
a
c
t
i
o
n
.




#
#
 
L
e
g
e
n
d




-
 
*
*
A
U
T
H
*
*
 
—
 
U
s
e
s
 
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
 
*
*
D
A
T
A
*
*
 
—
 
R
e
a
d
s
/
w
r
i
t
e
s
 
d
a
t
a
 
t
o
/
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


-
 
*
*
T
O
K
E
N
*
*
 
—
 
O
b
t
a
i
n
s
 
a
u
t
h
 
t
o
k
e
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
 
(
I
n
t
e
r
c
o
m
)


-
 
*
*
D
E
L
E
G
A
T
E
*
*
 
—
 
D
e
l
e
g
a
t
e
s
 
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
 
t
o
 
s
e
r
v
i
c
e


-
 
*
*
M
A
I
L
*
*
 
—
 
S
e
n
d
s
/
r
e
c
e
i
v
e
s
 
m
a
i
l
 
t
h
r
o
u
g
h
 
s
e
r
v
i
c
e


-
 
*
*
I
M
A
P
*
*
 
—
 
R
e
a
d
s
 
m
a
i
l
 
v
i
a
 
I
M
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


-
 
*
*
L
D
A
P
*
*
 
—
 
R
e
a
d
s
/
w
r
i
t
e
s
 
L
D
A
P
 
d
i
r
e
c
t
o
r
y
 
e
n
t
r
i
e
s


-
 
*
*
S
H
A
R
E
D
*
*
 
—
 
S
h
a
r
e
s
 
i
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
 
d
e
p
e
n
d
e
n
c
y
 
(
D
B
,
 
c
a
c
h
e
,
 
s
t
o
r
a
g
e
)




#
#
 
M
a
t
r
i
x




|
 
|
 
K
C
 
|
 
N
C
 
|
 
O
C
 
|
 
O
X
 
|
 
S
G
 
|
 
E
L
 
|
 
N
B
 
|
 
O
P
 
|
 
X
W
 
|
 
I
L
 
|
 
M
D
 
|
 
B
B
 
|
 
E
P
 
|
 
B
S
 
|
 
P
K
 
|
 
Z
M
 
|
 
L
S
 
|
 
S
P
 
|
 
C
P
 
|
 
D
I
 
|
 
E
X
 
|
 
T
3
 
|
 
N
T
 
|
 
J
T
 
|
 
D
P
 
|


|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|
-
-
-
|


|
 
*
*
K
e
y
c
l
o
a
k
*
*
 
|
 
—
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
—
 
|
 
—
 
|
 
—
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
A
U
T
H
 
|
 
—
 
|


|
 
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
*
*
 
|
 
|
 
—
 
|
 
D
A
T
A
 
|
 
D
A
T
A
 
|
 
D
A
T
A
 
|
 
D
A
T
A
 
|
 
P
O
R
T
A
L
 
|
 
D
A
T
A
 
|
 
N
E
W
S
 
|
 
D
A
T
A
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
F
I
L
E
 
|
 
|
 
|
 
|
 
|


|
 
*
*
O
p
e
n
C
l
o
u
d
*
*
 
|
 
|
 
|
 
—
 
|
 
D
A
T
A
 
|
 
D
A
T
A
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|


|
 
*
*
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
*
*
 
|
 
|
 
|
 
|
 
—
 
|
 
D
E
L
E
G
A
T
E
 
|
 
|
 
P
O
R
T
A
L
 
|
 
D
A
T
A
 
|
 
N
E
W
S
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
M
A
I
L
 
|
 
|


|
 
*
*
S
O
G
o
*
*
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
L
D
A
P
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
I
M
A
P
|
M
A
I
L
 
|
 
|




|
 
*
*
E
l
e
m
e
n
t
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
T
O
K
E
N
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
U
V
S
 
|


|
 
*
*
N
u
b
u
s
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|


|
 
*
*
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
*
*
 
|
 
|
 
D
A
T
A
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|


|
 
*
*
X
W
i
k
i
*
*
 
|
 
|
 
N
E
W
S
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
L
D
A
P
 
|
 
|
 
|
 
|
 
|
 
|


|
 
*
*
I
L
I
A
S
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
—
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|


|
 
*
*
M
o
o
d
l
e
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
—
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|


|
 
*
*
B
B
B
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|


|
 
*
*
E
t
h
e
r
p
a
d
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|


|
 
*
*
B
o
o
k
S
t
a
c
k
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|


|
 
*
*
P
l
a
n
k
a
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|


|
 
*
*
Z
a
m
m
a
d
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
M
A
I
L
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
M
A
I
L
 
|
 
M
A
I
L
 
|


|
 
*
*
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
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
L
D
A
P
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|


|
 
*
*
S
S
P
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
L
D
A
P
 
|
 
—
 
|
 
|
 
|
 
|
 
|


|
 
*
*
C
o
l
l
a
b
o
r
a
*
*
 
|
 
|
 
D
E
L
E
G
A
T
E
 
|
 
W
O
P
I
 
|
 
|
 
|
 
|
 
|
 
|
 
W
O
P
I
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|
 
|
 
|


|
 
*
*
C
r
y
p
t
P
a
d
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|
 
|


|
 
*
*
D
r
a
w
.
i
o
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|


|
 
*
*
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
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|


|
 
*
*
T
Y
P
O
3
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|


|
 
*
*
N
o
t
e
s
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|


|
 
*
*
J
i
t
s
i
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
P
O
R
T
A
L
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
—
 
|
 
|


|
 
*
*
D
o
v
e
c
o
t
-
P
o
s
t
f
i
x
*
*
 
|
 
|
 
|
 
|
 
|
 
|
 
M
A
I
L
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
|
 
M
A
I
L
 
|
 
I
M
A
P
 
|
 
—
 
|




#
#
 
S
h
a
r
e
d
 
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




#
#
#
 
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
i
n
g
l
e
 
c
l
u
s
t
e
r
,
 
m
u
l
t
i
p
l
e
 
d
a
t
a
b
a
s
e
s
)




S
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
 
t
h
e
 
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
 
i
n
s
t
a
n
c
e
:
 
N
u
b
u
s
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
,
 
E
l
e
m
e
n
t
,
 
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
,
 
X
W
i
k
i
,
 
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
,
 
E
t
h
e
r
p
a
d
,
 
P
l
a
n
k
a
,
 
Z
a
m
m
a
d
,
 
N
o
t
e
s
,
 
S
O
G
o




I
f
 
t
h
e
 
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
l
u
s
t
e
r
 
f
a
i
l
s
,
 
A
L
L
 
1
1
 
s
e
r
v
i
c
e
s
 
l
o
s
e
 
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
n
e
c
t
i
v
i
t
y
 
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
#
 
M
a
r
i
a
D
B
 
(
s
i
n
g
l
e
 
c
l
u
s
t
e
r
,
 
m
u
l
t
i
p
l
e
 
d
a
t
a
b
a
s
e
s
)




S
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
 
t
h
e
 
M
a
r
i
a
D
B
 
i
n
s
t
a
n
c
e
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
,
 
O
p
e
n
C
l
o
u
d
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
,
 
B
o
o
k
S
t
a
c
k
,
 
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
,
 
T
Y
P
O
3
,
 
I
L
I
A
S
 
(
G
a
l
e
r
a
)
,
 
M
o
o
d
l
e
 
(
e
x
t
e
r
n
a
l
)




#
#
#
 
R
e
d
i
s
 
(
s
i
n
g
l
e
 
c
l
u
s
t
e
r
)




S
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
 
t
h
e
 
R
e
d
i
s
 
i
n
s
t
a
n
c
e
:
 
N
u
b
u
s
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
,
 
E
l
e
m
e
n
t
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
,
 
Z
a
m
m
a
d
,
 
N
o
t
e
s




I
f
 
R
e
d
i
s
 
f
a
i
l
s
:
 
a
u
t
h
 
c
a
c
h
i
n
g
,
 
s
e
s
s
i
o
n
 
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
 
a
n
d
 
i
n
t
e
r
c
o
m
 
t
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
 
b
r
e
a
k
 
a
c
r
o
s
s
 
6
 
s
e
r
v
i
c
e
s
.




#
#
#
 
M
e
m
c
a
c
h
e
d
 
(
s
e
s
s
i
o
n
 
c
a
c
h
i
n
g
)




S
O
G
o
 
u
s
e
s
 
M
e
m
c
a
c
h
e
d
 
(
N
O
T
 
R
e
d
i
s
)
 
f
o
r
 
s
e
s
s
i
o
n
 
c
a
c
h
i
n
g
.
 
M
e
m
c
a
c
h
e
d
 
i
s
 
N
O
T
 
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
.




#
#
#
 
M
i
n
I
O
 
/
 
S
3




S
h
a
r
e
d
 
b
u
c
k
e
t
s
 
u
s
e
d
 
b
y
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
 
(
p
r
i
m
a
r
y
)
,
 
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
W
e
b
D
A
V
/
S
3
)
,
 
E
l
e
m
e
n
t
 
(
m
e
d
i
a
)
,
 
N
o
t
e
s
 
(
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
,
 
I
L
I
A
S
 
(
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
)
,
 
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
 
(
p
r
o
j
e
c
t
 
f
i
l
e
s
)




#
#
#
 
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
/
S
A
M
L
 
I
d
P
)




A
l
l
 
2
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
e
d
 
s
e
r
v
i
c
e
s
 
d
e
p
e
n
d
 
o
n
 
K
e
y
c
l
o
a
k
.
 
I
f
 
K
e
y
c
l
o
a
k
 
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
:


-
 
N
o
 
n
e
w
 
l
o
g
i
n
s
 
s
u
c
c
e
e
d


-
 
E
x
i
s
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
s
 
r
e
m
a
i
n
 
v
a
l
i
d
 
u
n
t
i
l
 
t
o
k
e
n
 
e
x
p
i
r
y


-
 
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
 
(
I
n
t
e
r
c
o
m
)
 
f
a
i
l
s
 
→
 
c
r
o
s
s
-
a
p
p
 
w
o
r
k
f
l
o
w
s
 
b
r
e
a
k




#
#
#
 
S
M
T
P
/
I
M
A
P
 
(
m
a
i
l
 
r
e
l
a
y
 
a
n
d
 
d
e
l
i
v
e
r
y
)




S
e
r
v
i
c
e
s
 
s
e
n
d
i
n
g
 
m
a
i
l
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
,
 
S
O
G
o
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
,
 
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
,
 
Z
a
m
m
a
d


S
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
i
n
g
 
m
a
i
l
:
 
S
O
G
o
 
(
v
i
a
 
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
 
+
 
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
)


S
e
r
v
i
c
e
s
 
a
c
t
i
n
g
 
a
s
 
m
a
i
l
 
r
e
l
a
y
:
 
D
o
v
e
c
o
t
-
P
o
s
t
f
i
x
 
(
f
o
r
 
S
O
G
o
)




#
#
 
S
i
n
g
l
e
 
P
o
i
n
t
s
 
o
f
 
F
a
i
l
u
r
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
 
I
m
p
a
c
t
 
S
c
o
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
s
 
A
f
f
e
c
t
e
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
 
A
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
i
o
n
 
|
 
2
0
 
s
e
r
v
i
c
e
s
 
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
 
|
 
A
l
l
 
P
G
-
b
a
c
k
e
d
 
s
e
r
v
i
c
e
s
 
|
 
1
1
 
s
e
r
v
i
c
e
s
 
|


|
 
M
a
r
i
a
D
B
 
|
 
A
l
l
 
M
a
r
i
a
D
B
-
b
a
c
k
e
d
 
s
e
r
v
i
c
e
s
 
|
 
8
 
s
e
r
v
i
c
e
s
 
|


|
 
R
e
d
i
s
 
|
 
C
a
c
h
i
n
g
 
+
 
s
e
s
s
i
o
n
 
|
 
7
 
s
e
r
v
i
c
e
s
 
|


|
 
M
i
n
I
O
 
|
 
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
 
|
 
6
 
s
e
r
v
i
c
e
s
 
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
 
A
l
l
 
e
x
t
e
r
n
a
l
 
a
c
c
e
s
s
 
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


|
 
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
 
|
 
C
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
 
|
 
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
,
 
E
l
e
m
e
n
t
 
|


|
 
M
a
t
r
i
x
 
U
V
S
 
|
 
J
i
t
s
i
 
a
u
t
h
 
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
 
|
 
J
i
t
s
i
,
 
E
l
e
m
e
n
t
 
|


|
 
D
o
v
e
c
o
t
-
P
o
s
t
f
i
x
 
|
 
M
a
i
l
 
d
e
l
i
v
e
r
y
/
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
 
S
O
G
o
 
|




#
#
 
I
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
 
D
i
a
g
r
a
m




`
`
`
m
e
r
m
a
i
d


g
r
a
p
h
 
L
R


 
 
 
 
s
u
b
g
r
a
p
h
 
I
d
e
n
t
i
t
y


 
 
 
 
 
 
 
 
K
C
[
K
e
y
c
l
o
a
k
]


 
 
 
 
 
 
 
 
L
D
A
P
[
O
p
e
n
L
D
A
P
]


 
 
 
 
e
n
d




 
 
 
 
s
u
b
g
r
a
p
h
 
P
o
r
t
a
l


 
 
 
 
 
 
 
 
N
B
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
]


 
 
 
 
 
 
 
 
I
C
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
e
r
v
i
c
e
]


 
 
 
 
e
n
d




 
 
 
 
s
u
b
g
r
a
p
h
 
S
t
o
r
a
g
e


 
 
 
 
 
 
 
 
S
3
[
M
i
n
I
O
 
/
 
S
3
]


 
 
 
 
 
 
 
 
P
G
[
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
]


 
 
 
 
 
 
 
 
M
Y
[
M
a
r
i
a
D
B
]


 
 
 
 
 
 
 
 
R
D
[
R
e
d
i
s
]


 
 
 
 
e
n
d




 
 
 
 
s
u
b
g
r
a
p
h
 
M
a
i
l


 
 
 
 
 
 
 
 
S
M
[
S
M
T
P
 
R
e
l
a
y
]


 
 
 
 
 
 
 
 
O
X
_
M
A
I
L
[
O
X
 
M
a
i
l
]


 
 
 
 
e
n
d




 
 
 
 
K
C
 
-
-
>
|
A
U
T
H
|
 
N
B


 
 
 
 
K
C
 
-
-
>
|
A
U
T
H
|
 
I
C


 
 
 
 
L
D
A
P
 
-
-
>
|
S
Y
N
C
|
 
K
C


 
 
 
 
L
D
A
P
 
-
-
>
|
S
Y
N
C
|
 
S
O
G
o


 
 
 
 
L
D
A
P
 
-
-
>
|
S
Y
N
C
|
 
X
W
i
k
i


 
 
 
 
L
D
A
P
 
-
-
>
|
S
Y
N
C
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


 
 
 
 
L
D
A
P
 
-
-
>
|
B
I
N
D
|
 
S
S
P




 
 
 
 
N
B
 
-
-
>
|
P
O
R
T
A
L
 
T
I
L
E
|
 
I
L
I
A
S


 
 
 
 
N
B
 
-
-
>
|
P
O
R
T
A
L
 
T
I
L
E
|
 
M
o
o
d
l
e


 
 
 
 
N
B
 
-
-
>
|
P
O
R
T
A
L
 
T
I
L
E
|
 
B
B
B


 
 
 
 
N
B
 
-
-
>
|
P
O
R
T
A
L
 
T
I
L
E
|
 
Z
a
m
m
a
d


 
 
 
 
N
B
 
-
-
>
|
P
O
R
T
A
L
 
T
I
L
E
|
 
P
l
a
n
k
a


 
 
 
 
N
B
 
-
-
>
|
P
O
R
T
A
L
 
T
I
L
E
|
 
J
i
t
s
i


 
 
 
 
N
B
 
-
-
>
|
P
O
R
T
A
L
 
T
I
L
E
|
 
N
o
t
e
s




 
 
 
 
I
C
 
-
-
>
|
T
O
K
E
N
|
 
O
X


 
 
 
 
I
C
 
-
-
>
|
T
O
K
E
N
|
 
E
l
e
m
e
n
t


 
 
 
 
I
C
 
-
-
>
|
N
A
V
|
 
E
l
e
m
e
n
t


 
 
 
 
I
C
 
-
-
>
|
N
E
W
S
|
 
X
W
i
k
i




 
 
 
 
O
X
 
-
-
>
|
F
I
L
E
P
I
C
K
E
R
 
v
i
a
 
I
C
|
 
N
C


 
 
 
 
O
P
 
-
-
>
|
F
I
L
E
 
S
T
O
R
E
 
v
i
a
 
I
C
|
 
N
C




 
 
 
 
S
3
 
-
-
>
|
F
I
L
E
S
|
 
N
C


 
 
 
 
S
3
 
-
-
>
|
F
I
L
E
S
|
 
O
C


 
 
 
 
S
3
 
-
-
>
|
F
I
L
E
S
|
 
E
l
e
m
e
n
t


 
 
 
 
S
3
 
-
-
>
|
F
I
L
E
S
|
 
N
o
t
e
s


 
 
 
 
S
3
 
-
-
>
|
F
I
L
E
S
|
 
I
L
I
A
S


 
 
 
 
S
3
 
-
-
>
|
F
I
L
E
S
|
 
O
P




 
 
 
 
P
G
 
-
.
-
>
|
D
B
|
 
N
B


 
 
 
 
P
G
 
-
.
-
>
|
D
B
|
 
N
C


 
 
 
 
P
G
 
-
.
-
>
|
D
B
|
 
E
l
e
m
e
n
t


 
 
 
 
P
G
 
-
.
-
>
|
D
B
|
 
O
P


 
 
 
 
P
G
 
-
.
-
>
|
D
B
|
 
X
W
i
k
i


 
 
 
 
P
G
 
-
.
-
>
|
D
B
|
 
B
B
B


 
 
 
 
P
G
 
-
.
-
>
|
D
B
|
 
S
O
G
o


 
 
 
 
P
G
 
-
.
-
>
|
D
B
|
 
E
t
h
e
r
p
a
d


 
 
 
 
P
G
 
-
.
-
>
|
D
B
|
 
P
l
a
n
k
a


 
 
 
 
P
G
 
-
.
-
>
|
D
B
|
 
Z
a
m
m
a
d


 
 
 
 
P
G
 
-
.
-
>
|
D
B
|
 
N
o
t
e
s




 
 
 
 
M
Y
 
-
.
-
>
|
D
B
|
 
O
C


 
 
 
 
M
Y
 
-
.
-
>
|
D
B
|
 
O
X


 
 
 
 
M
Y
 
-
.
-
>
|
D
B
|
 
I
L
I
A
S


 
 
 
 
M
Y
 
-
.
-
>
|
D
B
|
 
M
o
o
d
l
e


 
 
 
 
M
Y
 
-
.
-
>
|
D
B
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


 
 
 
 
M
Y
 
-
.
-
>
|
D
B
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


 
 
 
 
M
Y
 
-
.
-
>
|
D
B
|
 
T
Y
P
O
3




 
 
 
 
R
D
 
-
.
-
>
|
C
A
C
H
E
|
 
N
B


 
 
 
 
R
D
 
-
.
-
>
|
C
A
C
H
E
|
 
N
C


 
 
 
 
R
D
 
-
.
-
>
|
C
A
C
H
E
|
 
I
C


 
 
 
 
R
D
 
-
.
-
>
|
C
A
C
H
E
|
 
E
l
e
m
e
n
t


 
 
 
 
R
D
 
-
.
-
>
|
C
A
C
H
E
|
 
B
B
B


 
 
 
 
R
D
 
-
.
-
>
|
C
A
C
H
E
|
 
Z
a
m
m
a
d


 
 
 
 
R
D
 
-
.
-
>
|
C
A
C
H
E
|
 
N
o
t
e
s




 
 
 
 
M
C
[
M
e
m
c
a
c
h
e
d
]
 
-
.
-
>
|
S
E
S
S
I
O
N
 
C
A
C
H
E
|
 
S
O
G
o




 
 
 
 
S
M
 
-
-
>
|
M
A
I
L
|
 
O
X
_
M
A
I
L


 
 
 
 
S
M
 
-
-
>
|
M
A
I
L
|
 
S
O
G
o


 
 
 
 
S
M
 
-
-
>
|
M
A
I
L
|
 
N
C


 
 
 
 
S
M
 
-
-
>
|
M
A
I
L
|
 
O
P


 
 
 
 
S
M
 
-
-
>
|
M
A
I
L
|
 
Z
a
m
m
a
d




 
 
 
 
D
C
[
D
o
v
e
c
o
t
]
 
-
-
>
|
I
M
A
P
|
 
S
O
G
o


 
 
 
 
P
F
[
P
o
s
t
f
i
x
]
 
-
-
>
|
S
M
T
P
|
 
S
O
G
o




 
 
 
 
C
L
[
C
o
l
l
a
b
o
r
a
]
 
-
-
>
|
W
O
P
I
|
 
N
C


 
 
 
 
C
L
 
-
-
>
|
W
O
P
I
|
 
O
C


 
 
 
 
C
L
 
-
-
>
|
W
O
P
I
|
 
X
W
[
X
W
i
k
i
]




 
 
 
 
E
L
[
E
l
e
m
e
n
t
/
S
y
n
a
p
s
e
]
 
-
.
-
>
|
U
V
S
|
 
J
T
[
J
i
t
s
i
]


`
`
`

