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
 
P
r
o
f
i
l
e
s




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
 
s
u
p
p
o
r
t
s
 
m
u
l
t
i
p
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
.
 
E
a
c
h
 
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


o
v
e
r
r
i
d
e
s
 
s
p
e
c
i
f
i
c
 
v
a
l
u
e
s
 
w
h
i
l
e
 
i
n
h
e
r
i
t
i
n
g
 
f
r
o
m
 
t
h
e
 
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
.




#
#
 
E
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
 
H
i
e
r
a
r
c
h
y




`
`
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
d
e
f
a
u
l
t
/
 
 
 
 
 
←
 
B
a
s
e
 
(
a
l
l
 
s
h
a
r
e
d
 
c
o
n
f
i
g
)


 
 
├
─
 
g
l
o
b
a
l
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
 
 
 
 
 
 
 
 
 
 
 
 
←
 
D
o
m
a
i
n
,
 
s
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
e
s
,
 
i
n
g
r
e
s
s
 
I
P


 
 
├
─
 
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
 
 
 
 
 
 
 
 
 
←
 
A
l
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


 
 
└
─
 
o
b
j
e
c
t
s
t
o
r
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
 
 
 
 
 
←
 
S
3
/
M
i
n
I
O
 
e
n
d
p
o
i
n
t
s




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
<
e
n
v
>
/
 
 
 
 
 
 
 
←
 
E
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
 
o
v
e
r
r
i
d
e
s


 
 
└
─
 
o
v
e
r
r
i
d
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
 
 
 
 
 
 
 
 
 
←
 
P
e
r
-
e
n
v
 
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
s
,
 
f
e
a
t
u
r
e
 
f
l
a
g
s


`
`
`




#
#
 
P
r
o
f
i
l
e
s




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
 
d
e
v
 
|
 
s
t
a
g
i
n
g
 
|
 
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


|
 
D
o
m
a
i
n
 
|
 
`
d
e
v
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
 
`
s
t
a
g
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
`
 
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


|
 
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
 
(
D
B
)
 
|
 
`
c
e
p
h
-
r
b
d
-
s
s
d
`
 
|
 
`
c
e
p
h
-
r
b
d
-
s
s
d
`
 
|
 
`
c
e
p
h
-
r
b
d
-
s
s
d
`
 
|


|
 
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
 
(
f
i
l
e
s
)
 
|
 
`
c
e
p
h
-
c
e
p
h
f
s
-
h
d
d
-
e
c
`
 
|
 
`
c
e
p
h
-
c
e
p
h
f
s
-
h
d
d
-
e
c
`
 
|
 
`
c
e
p
h
-
c
e
p
h
f
s
-
h
d
d
-
e
c
`
 
|


|
 
B
a
c
k
u
p
 
|
 
D
i
s
a
b
l
e
d
 
|
 
E
n
a
b
l
e
d
 
(
d
a
i
l
y
)
 
|
 
E
n
a
b
l
e
d
 
(
d
a
i
l
y
)
 
|


|
 
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
 
o
n
l
y
 
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
 
+
 
G
r
a
f
a
n
a
 
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
 
+
 
G
r
a
f
a
n
a
 
+
 
A
l
e
r
t
i
n
g
 
|


|
 
T
L
S
 
|
 
S
e
l
f
-
s
i
g
n
e
d
 
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
 
S
e
l
f
-
s
i
g
n
e
d
 
|
 
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
 
/
 
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
 
h
a
p
r
o
x
y
 
|
 
h
a
p
r
o
x
y
 
|
 
h
a
p
r
o
x
y
 
|


|
 
P
r
o
x
y
 
|
 
`
w
w
w
-
p
r
o
x
y
2
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
:
3
1
2
8
`
 
|
 
`
w
w
w
-
p
r
o
x
y
2
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
:
3
1
2
8
`
 
|
 
`
w
w
w
-
p
r
o
x
y
2
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
:
3
1
2
8
`
 
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
o
p
e
n
d
e
s
k
-
d
e
v
`
 
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
s
t
a
g
i
n
g
`
 
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
 
1
 
(
m
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
)
 
|
 
1
 
|
 
2
+
 
(
s
t
a
t
e
f
u
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
 
|
 
M
i
n
i
m
a
l
 
(
t
e
s
t
i
n
g
)
 
|
 
S
t
a
n
d
a
r
d
 
|
 
P
r
o
d
u
c
t
i
o
n
-
g
r
a
d
e
 
|




#
#
 
F
e
a
t
u
r
e
 
F
l
a
g
s




|
 
F
l
a
g
 
|
 
d
e
v
 
|
 
s
t
a
g
i
n
g
 
|
 
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
 
|
 
A
f
f
e
c
t
e
d
 
S
e
r
v
i
c
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
|
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
 
`
D
E
P
L
O
Y
_
J
I
T
S
I
`
 
|
 
y
e
s
 
|
 
y
e
s
 
|
 
y
e
s
 
(
o
r
 
B
B
B
)
 
|
 
J
i
t
s
i
 
/
 
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
 
|


|
 
`
D
E
P
L
O
Y
_
B
I
G
B
L
U
E
B
U
T
T
O
N
`
 
|
 
n
o
 
|
 
y
e
s
 
|
 
y
e
s
 
(
o
r
 
J
i
t
s
i
)
 
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
 
/
 
J
i
t
s
i
 
|


|
 
`
R
U
N
_
T
E
S
T
S
`
 
|
 
y
e
s
 
|
 
y
e
s
 
|
 
o
n
-
d
e
m
a
n
d
 
|
 
E
2
E
 
t
e
s
t
 
p
i
p
e
l
i
n
e
 
|


|
 
`
D
E
P
L
O
Y
_
A
L
L
_
C
O
M
P
O
N
E
N
T
S
`
 
|
 
n
o
 
|
 
n
o
 
|
 
n
o
 
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
 
`
O
P
E
N
D
E
S
K
_
E
N
T
E
R
P
R
I
S
E
`
 
|
 
n
o
 
|
 
n
o
 
|
 
c
o
n
d
i
t
i
o
n
a
l
 
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




#
#
 
E
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
-
S
p
e
c
i
f
i
c
 
B
e
h
a
v
i
o
r




#
#
#
 
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


-
 
S
i
n
g
l
e
 
r
e
p
l
i
c
a
 
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
 
S
e
l
f
-
s
i
g
n
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
s
 
(
n
o
 
e
x
t
e
r
n
a
l
 
C
A
 
r
e
q
u
i
r
e
d
)


-
 
N
o
 
b
a
c
k
u
p
 
s
c
h
e
d
u
l
e
 
(
d
a
t
a
 
i
s
 
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


-
 
D
e
b
u
g
 
l
o
g
g
i
n
g
 
e
n
a
b
l
e
d
 
(
`
d
e
b
u
g
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
)




#
#
#
 
S
t
a
g
i
n
g


-
 
M
i
r
r
o
r
 
o
f
 
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
 
S
e
l
f
-
s
i
g
n
e
d
 
T
L
S
 
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
 
c
e
r
t
 
r
e
q
u
i
r
e
s
 
m
a
n
u
a
l
 
a
p
p
r
o
v
a
l
)


-
 
D
a
i
l
y
 
b
a
c
k
u
p
s
 
e
n
a
b
l
e
d


-
 
R
e
d
u
c
e
d
 
r
e
p
l
i
c
a
s
 
(
1
 
p
e
r
 
s
e
r
v
i
c
e
)




#
#
#
 
P
r
o
d
u
c
t
i
o
n


-
 
P
r
o
d
u
c
t
i
o
n
-
g
r
a
d
e
 
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
 
H
P
A
 
w
h
e
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


-
 
D
a
i
l
y
 
b
a
c
k
u
p
s
 
a
t
 
0
0
:
4
2
 
U
T
C


-
 
A
l
e
r
t
m
a
n
a
g
e
r
 
r
o
u
t
i
n
g
 
t
o
 
H
R
Z
 
o
p
s
 
t
e
a
m


-
 
B
r
u
t
e
-
f
o
r
c
e
 
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
 
e
n
a
b
l
e
d
 
(
N
E
V
E
R
 
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
 
N
a
m
e
s
p
a
c
e
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
`




#
#
 
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
 
C
o
n
t
e
x
t




#
#
#
 
C
l
u
s
t
e
r
 
D
e
t
a
i
l
s




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
 
|
 
K
3
s
 
v
1
.
3
2
.
3
 
|


|
 
O
S
 
|
 
D
e
b
i
a
n
 
1
2
 
|


|
 
C
o
n
t
r
o
l
 
P
l
a
n
e
 
|
 
3
 
n
o
d
e
s
 
(
v
h
r
z
2
3
3
1
-
2
3
3
3
)
 
|


|
 
W
o
r
k
e
r
s
 
|
 
6
 
n
o
d
e
s
 
(
v
h
r
z
2
3
3
4
-
2
3
3
9
)
 
|


|
 
C
o
n
t
a
i
n
e
r
 
R
u
n
t
i
m
e
 
|
 
c
o
n
t
a
i
n
e
r
d
 
2
.
0
.
4
-
k
3
s
2
 
|


|
 
I
n
g
r
e
s
s
 
I
P
 
|
 
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
 
|


|
 
S
t
o
r
a
g
e
 
(
D
B
)
 
|
 
`
c
e
p
h
-
r
b
d
-
s
s
d
`
 
(
R
W
O
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
 
(
f
i
l
e
s
)
 
|
 
`
c
e
p
h
-
c
e
p
h
f
s
-
h
d
d
-
e
c
`
 
(
R
W
X
)
 
|


|
 
B
a
c
k
u
p
 
t
a
r
g
e
t
 
|
 
`
s
3
:
h
t
t
p
s
:
/
/
s
3
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
b
a
c
k
u
p
s
`
 
|


|
 
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
 
H
A
P
r
o
x
y
 
(
p
r
i
m
a
r
y
)
 
+
 
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
 
(
s
e
c
o
n
d
a
r
y
)
 
|


|
 
G
i
t
O
p
s
 
|
 
A
r
g
o
C
D
 
|




#
#
#
 
A
c
t
i
v
e
 
N
a
m
e
s
p
a
c
e
s




`
a
r
g
o
c
d
`
,
 
`
b
u
i
l
d
k
i
t
`
,
 
`
c
e
p
h
-
c
s
i
-
c
e
p
h
f
s
`
,
 
`
c
e
p
h
-
c
s
i
-
r
b
d
`
,
 
`
d
e
f
a
u
l
t
`
,


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
,
 
`
k
u
b
e
-
n
o
d
e
-
l
e
a
s
e
`
,
 
`
k
u
b
e
-
p
u
b
l
i
c
`
,
 
`
k
u
b
e
-
s
y
s
t
e
m
`
,


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
,
 
`
t
e
s
t
i
n
g
`
,
 
`
t
r
a
e
f
i
k
`




#
#
#
 
E
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
-
S
p
e
c
i
f
i
c
 
O
v
e
r
r
i
d
e
s




A
l
l
 
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
 
i
n
h
e
r
i
t
 
f
r
o
m
 
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
d
e
f
a
u
l
t
/
`
 
w
h
i
c
h
 
c
o
n
t
a
i
n
s
:


-
 
`
g
l
o
b
a
l
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
 
—
 
D
o
m
a
i
n
,
 
s
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
e
s
,
 
i
n
g
r
e
s
s
 
I
P
,
 
c
l
u
s
t
e
r
 
d
o
m
a
i
n


-
 
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
 
—
 
D
a
t
a
b
a
s
e
 
e
n
g
i
n
e
 
t
y
p
e
 
s
e
l
e
c
t
i
o
n
 
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
s


-
 
`
o
b
j
e
c
t
s
t
o
r
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
 
—
 
M
i
n
I
O
/
S
3
 
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


-
 
`
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
 
—
 
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
 
(
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
b
a
s
e
d
)


-
 
`
r
e
s
o
u
r
c
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
 
—
 
C
P
U
/
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
s
 
a
n
d
 
r
e
q
u
e
s
t
s
 
p
e
r
 
c
o
m
p
o
n
e
n
t


-
 
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
 
—
 
P
e
r
-
c
o
m
p
o
n
e
n
t
 
r
e
p
l
i
c
a
 
c
o
u
n
t
s


-
 
`
i
m
a
g
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
 
—
 
C
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
 
r
e
g
i
s
t
r
i
e
s
,
 
r
e
p
o
s
,
 
a
n
d
 
t
a
g
s




#
#
#
 
K
n
o
w
n
 
H
R
Z
 
D
N
S
 
Q
u
i
r
k
s




T
h
e
 
H
R
Z
 
C
o
r
e
D
N
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
 
h
a
s
 
l
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
 
w
o
r
k
a
r
o
u
n
d
s
 
f
o
r


c
e
r
t
a
i
n
 
D
N
S
 
r
e
s
o
l
u
t
i
o
n
 
s
c
e
n
a
r
i
o
s
.




#
#
#
#
 
I
s
s
u
e
:
 
E
x
t
e
r
n
a
l
 
C
N
A
M
E
 
C
h
a
i
n
 
R
e
s
o
l
u
t
i
o
n
 
F
a
i
l
u
r
e
s




*
*
P
r
o
b
l
e
m
*
*
:
 
H
R
Z
 
C
o
r
e
D
N
S
 
f
a
i
l
s
 
t
o
 
r
e
s
o
l
v
e
 
e
x
t
e
r
n
a
l
 
C
N
A
M
E
 
c
h
a
i
n
s
 
t
h
a
t
 
a
r
e
 
2
+


h
o
p
s
 
d
e
e
p
 
f
r
o
m
 
t
h
e
 
i
n
t
e
r
n
a
l
 
D
N
S
 
s
e
r
v
e
r
.




*
*
E
x
a
m
p
l
e
*
*
:
 
R
e
s
o
l
v
i
n
g
 
`
w
w
w
-
p
r
o
x
y
2
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
(
C
N
A
M
E
)
 
w
w
w
-
p
r
o
x
y
2
`
 
→
 


`
(
A
)
 
1
3
7
.
2
4
8
.
1
.
8
`
 
f
a
i
l
s
 
i
f
 
d
o
n
e
 
f
r
o
m
 
w
i
t
h
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
 
b
e
c
a
u
s
e
 
C
o
r
e
D
N
S


c
a
n
n
o
t
 
f
o
l
l
o
w
 
t
h
e
 
C
N
A
M
E
 
c
h
a
i
n
 
b
e
y
o
n
d
 
t
h
e
 
f
i
r
s
t
 
h
o
p
.




*
*
W
o
r
k
a
r
o
u
n
d
*
*
:
 
U
s
e
 
`
h
o
s
t
A
l
i
a
s
e
s
`
 
i
n
 
p
o
d
 
s
p
e
c
s
 
t
o
 
h
a
r
d
c
o
d
e
 
t
h
e
 
r
e
s
o
l
v
e
d
 
I
P


a
d
d
r
e
s
s
e
s
 
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
 
n
e
e
d
 
t
o
 
r
e
s
o
l
v
e
 
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
s
t
n
a
m
e
s
.




*
*
E
x
a
m
p
l
e
 
`
h
o
s
t
A
l
i
a
s
e
s
`
 
(
Y
A
M
L
 
s
n
i
p
p
e
t
)
*
*
:


`
`
`
y
a
m
l


h
o
s
t
A
l
i
a
s
e
s
:


 
 
-
 
i
p
:
 
"
1
3
7
.
2
4
8
.
1
.
8
"


 
 
 
 
h
o
s
t
n
a
m
e
s
:


 
 
 
 
 
 
-
 
"
w
w
w
-
p
r
o
x
y
2
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
"


 
 
 
 
 
 
-
 
"
p
r
o
x
y
0
2
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
"


`
`
`




#
#
#
#
 
I
s
s
u
e
:
 
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
 
I
P
 
C
o
n
f
l
i
c
t




*
*
P
r
o
b
l
e
m
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
 
a
n
d
 
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
 
b
o
t
h
 
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
,
 
c
a
u
s
i
n
g
 
r
o
u
t
i
n
g
 
c
o
n
f
u
s
i
o
n
 
f
o
r
 
c
e
r
t
a
i
n
 
i
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
.




*
*
W
o
r
k
a
r
o
u
n
d
*
*
:
 
U
s
e
 
e
x
p
l
i
c
i
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
`
 
i
n
 
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
:


-
 
H
A
P
r
o
x
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
:
 
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
 
r
e
s
o
u
r
c
e
s
:
 
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




*
*
N
o
t
e
*
*
:
 
S
o
m
e
 
u
p
s
t
r
e
a
m
 
c
h
a
r
t
s
 
d
e
f
a
u
l
t
 
t
o
 
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
;
 
t
h
i
s
 
m
u
s
t
 
b
e
 
o
v
e
r
r
i
d
d
e
n
 
w
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
 
(
e
.
g
.
,
 
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
)
.




#
#
#
#
 
I
s
s
u
e
:
 
P
r
o
x
y
 
R
e
s
o
l
u
t
i
o
n
 
f
o
r
 
P
o
d
s
 
N
e
e
d
i
n
g
 
I
n
t
e
r
n
e
t
 
A
c
c
e
s
s




*
*
P
r
o
b
l
e
m
*
*
:
 
P
o
d
s
 
t
h
a
t
 
n
e
e
d
 
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
 
A
P
I
 
c
a
l
l
s
 
(
e
.
g
.
,
 
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


c
h
e
c
k
s
,
 
e
x
t
e
r
n
a
l
 
w
e
b
 
s
e
r
v
i
c
e
s
)
 
c
a
n
n
o
t
 
r
e
s
o
l
v
e
 
`
w
w
w
-
p
r
o
x
y
2
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


d
u
e
 
t
o
 
t
h
e
 
C
o
r
e
D
N
S
 
C
N
A
M
E
 
c
h
a
i
n
 
f
a
i
l
u
r
e
.




*
*
W
o
r
k
a
r
o
u
n
d
*
*
:
 
A
d
d
 
`
h
o
s
t
A
l
i
a
s
e
s
`
 
w
i
t
h
 
t
h
e
 
p
r
o
x
y
 
I
P
 
t
o
 
a
f
f
e
c
t
e
d
 
p
o
d
s
 
O
R
 
u
s
e
 
t
h
e


I
P
 
d
i
r
e
c
t
l
y
 
`
h
t
t
p
:
/
/
1
3
7
.
2
4
8
.
1
.
8
:
3
1
2
8
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
 
D
N
S
 
h
o
s
t
n
a
m
e
.




*
*
E
x
a
m
p
l
e
 
u
s
a
g
e
*
*
:


`
`
`
y
a
m
l


e
n
v
:


 
 
-
 
n
a
m
e
:
 
H
T
T
P
_
P
R
O
X
Y


 
 
 
 
v
a
l
u
e
:
 
"
h
t
t
p
:
/
/
1
3
7
.
2
4
8
.
1
.
8
:
3
1
2
8
"
 
 
#
 
U
s
e
 
I
P
 
d
i
r
e
c
t
l
y
 
i
n
s
t
e
a
d
 
o
f
 
D
N
S


`
`
`


-
 
`
i
n
g
r
e
s
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
 
—
 
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
 
a
n
d
 
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
s


-
 
`
s
e
l
i
n
u
x
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
 
—
 
S
E
L
i
n
u
x
 
l
a
b
e
l
 
o
v
e
r
r
i
d
e
s
 
p
e
r
 
c
o
m
p
o
n
e
n
t


-
 
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
 
—
 
O
t
t
e
r
i
z
e
,
 
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
,
 
a
n
d
 
G
r
a
f
a
n
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
s


-
 
`
t
u
r
n
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
 
—
 
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
o
r
 
J
i
t
s
i


-
 
`
s
i
p
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
 
—
 
S
I
P
 
s
e
r
v
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
 
f
o
r
 
J
i
g
a
s
i
 
(
d
i
s
a
b
l
e
d
 
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

