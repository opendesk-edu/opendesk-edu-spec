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
d
i
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




I
n
-
m
e
m
o
r
y
 
d
a
t
a
 
s
t
o
r
e
 
u
s
e
d
 
a
s
 
a
 
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
 
c
a
c
h
e
 
a
n
d
 
s
e
s
s
i
o
n
 
s
t
o
r
e
 
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
 
P
r
o
v
i
d
e
s
 
c
a
c
h
i
n
g
 
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
 
(
s
e
s
s
i
o
n
s
,
 
t
o
k
e
n
s
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
 
l
o
c
k
i
n
g
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
s
s
a
g
e
 
c
a
c
h
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
t
o
k
e
n


c
a
c
h
e
)
,
 
S
O
G
o
 
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
e
)
,
 
N
o
t
e
s
 
(
Y
.
j
s
 
s
y
n
c
)
,
 
a
n
d
 
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




R
e
d
i
s
 
r
u
n
s
 
a
s
 
a
 
s
i
n
g
l
e
 
S
t
a
t
e
f
u
l
S
e
t
 
w
i
t
h
 
R
W
O
 
P
V
C
,
 
b
a
c
k
e
d
 
u
p
 
v
i
a
 
R
D
B
 
s
n
a
p
s
h
o
t
s


(
n
o
t
 
k
8
u
p
 
—
 
R
W
O
 
P
V
C
s
 
e
x
c
l
u
d
e
d
)
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
 
R
e
d
i
s
 
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
 
c
a
c
h
e
 
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
/
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
E
l
e
m
e
n
t
/
S
O
G
o
/
N
o
t
e
s
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
 
R
D
B
 
s
n
a
p
s
h
o
t
 
b
a
c
k
u
p
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
r
e
d
i
s
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
 
R
e
d
i
s
 
S
e
n
t
i
n
e
l
 
(
H
A
)
,
 
R
e
d
i
s
 
C
l
u
s
t
e
r
 
(
s
h
a
r
d
i
n
g
)
,
 
R
e
d
i
s
 
S
t
r
e
a
m
s
 
(
p
u
b
/
s
u
b
)
,
 
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
-
s
p
e
c
i
f
i
c
 
k
e
y
 
p
a
t
t
e
r
n
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
 
R
e
d
i
s
 
S
e
n
t
i
n
e
l
 
o
r
 
C
l
u
s
t
e
r
 
m
o
d
e
 
(
s
i
n
g
l
e
-
n
o
d
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
 
o
n
l
y
)


-
 
R
e
d
i
s
 
S
t
r
e
a
m
s
 
a
s
 
a
 
m
e
s
s
a
g
e
 
b
r
o
k
e
r
 
(
u
s
e
 
M
a
t
r
i
x
/
E
l
e
m
e
n
t
 
i
n
s
t
e
a
d
)


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
a
t
a
 
(
R
e
d
i
s
 
i
s
 
c
a
c
h
e
-
o
n
l
y
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
h
a
r
e
d
 
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
 
f
o
r
 
p
l
a
t
f
o
r
m
 
c
a
c
h
i
n
g




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
 
S
H
A
L
L
 
d
e
p
l
o
y
 
a
 
s
i
n
g
l
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
 
s
e
r
v
i
n
g
 
a
l
l


R
e
d
i
s
-
d
e
p
e
n
d
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
s
 
v
i
a
 
a
 
s
h
a
r
e
d
 
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
`
 
s
e
r
v
i
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
 
c
a
c
h
i
n
g


-
 
G
I
V
E
N
 
R
e
d
i
s
 
S
t
a
t
e
f
u
l
S
e
t
 
w
i
t
h
 
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
 
1
`


-
 
T
H
E
N
 
t
h
e
 
f
o
l
l
o
w
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
s
 
c
o
n
n
e
c
t
 
t
o
 
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
`
:


 
 
-
 
K
e
y
c
l
o
a
k
 
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
e
,
 
t
o
k
e
n
 
c
a
c
h
e
)


 
 
-
 
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
t
o
k
e
n
 
c
a
c
h
e
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
 
f
i
l
e
 
l
o
c
k
i
n
g
)


 
 
-
 
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
 
m
e
s
s
a
g
e
 
c
a
c
h
e
)


 
 
-
 
S
O
G
o
 
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
e
 
v
i
a
 
M
e
m
c
a
c
h
e
d
 
—
 
s
e
p
a
r
a
t
e
,
 
s
e
e
 
S
O
G
o
 
s
p
e
c
)


 
 
-
 
N
o
t
e
s
 
(
Y
.
j
s
 
d
o
c
u
m
e
n
t
 
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
)


-
 
A
N
D
 
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
 
k
e
y
 
p
r
e
f
i
x
 
t
o
 
a
v
o
i
d
 
c
o
l
l
i
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
 
S
t
o
r
a
g
e
 
o
n
 
C
e
p
h
 
R
B
D
 
S
S
D




R
e
d
i
s
 
S
H
A
L
L
 
u
s
e
 
a
 
R
e
a
d
W
r
i
t
e
O
n
c
e
 
P
V
C
 
p
r
o
v
i
s
i
o
n
e
d
 
f
r
o
m
 
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
 
f
o
r
 
R
D
B
 
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
V
C
 
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


-
 
G
I
V
E
N
 
R
e
d
i
s
 
S
t
a
t
e
f
u
l
S
e
t
 
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
 
v
o
l
u
m
e


-
 
W
H
E
N
 
t
h
e
 
P
V
C
 
i
s
 
c
r
e
a
t
e
d
 
w
i
t
h
 
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
:
 
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


-
 
T
H
E
N
 
t
h
e
 
v
o
l
u
m
e
 
i
s
 
p
r
o
v
i
s
i
o
n
e
d
 
a
s
 
a
 
C
e
p
h
 
R
B
D
 
i
m
a
g
e
 
o
n
 
S
S
D
 
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
 
t
h
e
 
v
o
l
u
m
e
 
i
s
 
1
G
i
 
c
a
p
a
c
i
t
y


-
 
A
N
D
 
t
h
e
 
P
V
C
 
h
a
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
 
`
k
8
u
p
.
i
o
/
e
x
c
l
u
d
e
:
 
"
t
r
u
e
"
`
 
(
R
W
O
 
e
x
c
l
u
s
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
 
R
D
B
 
s
n
a
p
s
h
o
t
 
b
a
c
k
u
p




R
e
d
i
s
 
S
H
A
L
L
 
b
e
 
b
a
c
k
e
d
 
u
p
 
v
i
a
 
R
D
B
 
s
n
a
p
s
h
o
t
s
 
s
t
o
r
e
d
 
t
o
 
M
i
n
I
O
 
S
3
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
D
B
 
s
n
a
p
s
h
o
t
 
t
o
 
S
3


-
 
G
I
V
E
N
 
R
e
d
i
s
 
S
t
a
t
e
f
u
l
S
e
t
 
P
o
d
 
w
i
t
h
 
R
W
O
 
P
V
C
 
`
d
a
t
a
-
r
e
d
i
s
-
0
`


-
 
W
H
E
N
 
t
h
e
 
b
a
c
k
u
p
 
j
o
b
 
t
r
i
g
g
e
r
s
 
a
n
 
R
D
B
 
s
n
a
p
s
h
o
t


-
 
T
H
E
N
 
t
h
e
 
s
n
a
p
s
h
o
t
 
i
s
 
c
o
p
i
e
d
 
t
o
 
M
i
n
I
O
 
S
3
 
b
u
c
k
e
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
b
a
c
k
u
p
s
`


-
 
A
N
D
 
t
h
e
 
s
n
a
p
s
h
o
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
l
l
 
k
e
y
s
 
a
t
 
t
h
e
 
t
i
m
e
 
o
f
 
t
h
e
 
d
u
m
p




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
a
c
h
e
 
f
l
u
s
h
 
p
r
o
c
e
d
u
r
e




R
e
d
i
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
 
s
e
l
e
c
t
i
v
e
 
a
n
d
 
f
u
l
l
 
c
a
c
h
e
 
f
l
u
s
h
 
f
o
r
 
o
p
e
r
a
t
i
o
n
a
l
 
r
e
c
o
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
 
F
u
l
l
 
c
a
c
h
e
 
f
l
u
s
h
 
(
e
m
e
r
g
e
n
c
y
)


-
 
G
I
V
E
N
 
c
o
n
f
i
r
m
e
d
 
c
a
c
h
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
 
(
s
t
a
l
e
 
s
e
s
s
i
o
n
s
,
 
i
n
v
a
l
i
d
 
t
o
k
e
n
s
)


-
 
W
H
E
N
 
`
r
e
d
i
s
-
c
l
i
 
F
L
U
S
H
A
L
L
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
 
a
l
l
 
k
e
y
s
 
a
r
e
 
c
l
e
a
r
e
d
 
f
r
o
m
 
R
e
d
i
s


-
 
A
N
D
 
a
l
l
 
u
s
e
r
s
 
a
r
e
 
l
o
g
g
e
d
 
o
u
t
 
(
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
s
 
i
n
v
a
l
i
d
a
t
e
d
)


-
 
A
N
D
 
a
f
f
e
c
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
 
m
u
s
t
 
r
e
s
t
a
r
t
 
t
o
 
r
e
b
u
i
l
d
 
t
h
e
i
r
 
c
a
c
h
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
e
l
e
c
t
i
v
e
 
k
e
y
 
f
l
u
s
h


-
 
G
I
V
E
N
 
s
t
a
l
e
 
c
a
c
h
e
 
f
o
r
 
a
 
s
p
e
c
i
f
i
c
 
s
e
r
v
i
c
e
 
(
e
.
g
.
,
 
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
s
)


-
 
W
H
E
N
 
`
r
e
d
i
s
-
c
l
i
 
D
E
L
 
k
e
y
c
l
o
a
k
:
*
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
 
v
i
a
 
S
C
A
N
 
p
a
t
t
e
r
n


-
 
T
H
E
N
 
o
n
l
y
 
K
e
y
c
l
o
a
k
-
r
e
l
a
t
e
d
 
k
e
y
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


-
 
A
N
D
 
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
 
c
a
c
h
e
s
 
r
e
m
a
i
n
 
i
n
t
a
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
 
v
i
a
 
r
e
d
i
s
_
e
x
p
o
r
t
e
r




R
e
d
i
s
 
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
 
m
e
t
r
i
c
s
 
a
t
 
p
o
r
t
 
9
1
2
1
 
v
i
a
 
`
r
e
d
i
s
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


f
o
r
 
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
 
s
c
r
a
p
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
 
M
e
t
r
i
c
s
 
c
o
l
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
 
`
r
e
d
i
s
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
 
r
u
n
n
i
n
g
 
a
l
o
n
g
s
i
d
e
 
R
e
d
i
s


-
 
W
H
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
 
s
c
r
a
p
e
s
 
`
h
t
t
p
:
/
/
<
p
o
d
>
:
9
1
2
1
/
m
e
t
r
i
c
s
`


-
 
T
H
E
N
 
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
 
m
e
m
o
r
y
 
u
s
a
g
e
,
 
k
e
y
 
c
o
u
n
t
s
,
 
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
t
a
t
s
,


 
 
c
o
m
m
a
n
d
 
r
a
t
e
s
,
 
a
n
d
 
h
i
t
/
m
i
s
s
 
r
a
t
i
o
s




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
 
S
t
o
r
a
g
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
 
R
e
d
i
s
 
S
e
r
v
e
r
 
|
 
I
n
-
m
e
m
o
r
y
 
c
a
c
h
e
,
 
s
e
s
s
i
o
n
 
s
t
o
r
e
 
|
 
1
 
(
S
t
a
t
e
f
u
l
S
e
t
)
 
|
 
R
W
O
 
P
V
C
 
`
d
a
t
a
-
r
e
d
i
s
-
0
`
 
(
1
G
i
,
 
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
)
 
|


|
 
r
e
d
i
s
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
 
N
o
n
e
 
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
 
R
e
d
i
s
 
S
e
r
v
e
r
 
|
 
9
9
9
 
(
r
e
d
i
s
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


|
 
r
e
d
i
s
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
 
I
m
a
g
e
 
|
 
R
e
d
i
s
 
(
v
e
r
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
d
 
b
y
 
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
)
 
|


|
 
P
V
C
 
n
a
m
e
 
|
 
`
d
a
t
a
-
r
e
d
i
s
-
0
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
 
P
V
C
 
s
i
z
e
 
|
 
1
G
i
 
|


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
 
|
 
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
`
 
(
h
e
a
d
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
 
f
o
r
 
D
N
S
)
 
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
 
9
1
2
1
 
(
r
e
d
i
s
_
e
x
p
o
r
t
e
r
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
 
`
0
1
0
-
i
n
f
r
a
`
 
|


|
 
R
W
O
 
e
x
c
l
u
s
i
o
n
 
|
 
`
k
8
u
p
.
i
o
/
e
x
c
l
u
d
e
:
 
"
t
r
u
e
"
`
 
|


|
 
P
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
 
|
 
R
D
B
 
s
n
a
p
s
h
o
t
s
 
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
 
C
o
n
s
u
m
e
r
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
 
K
e
y
 
P
r
e
f
i
x
 
|
 
U
s
e
 
C
a
s
e
 
|
 
I
m
p
a
c
t
 
o
n
 
F
L
U
S
H
A
L
L
 
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
:
*
`
 
|
 
S
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
e
,
 
t
o
k
e
n
 
c
a
c
h
e
 
|
 
A
l
l
 
u
s
e
r
s
 
l
o
g
g
e
d
 
o
u
t
 
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
 
`
i
n
t
e
r
c
o
m
:
*
`
 
|
 
T
o
k
e
n
 
c
a
c
h
e
 
|
 
R
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
d
 
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
:
*
`
 
|
 
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
 
f
i
l
e
 
l
o
c
k
i
n
g
 
|
 
F
i
l
e
 
l
o
c
k
 
t
i
m
e
o
u
t
 
(
~
3
0
s
)
 
|


|
 
E
l
e
m
e
n
t
 
|
 
`
e
l
e
m
e
n
t
:
*
`
 
|
 
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
 
c
a
c
h
e
 
|
 
M
e
s
s
a
g
e
 
r
e
l
o
a
d
 
f
r
o
m
 
D
B
 
|


|
 
N
o
t
e
s
 
|
 
`
n
o
t
e
s
:
*
`
 
|
 
Y
.
j
s
 
d
o
c
u
m
e
n
t
 
s
y
n
c
 
|
 
D
o
c
u
m
e
n
t
 
r
e
-
s
y
n
c
 
f
r
o
m
 
S
3
 
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
 
|
 
`
b
b
b
:
*
`
 
|
 
C
h
a
t
/
s
e
s
s
i
o
n
s
 
(
o
w
n
 
R
e
d
i
s
)
 
|
 
N
o
t
 
a
f
f
e
c
t
e
d
 
(
s
e
p
a
r
a
t
e
)
 
|


|
 
Z
a
m
m
a
d
 
|
 
`
z
a
m
m
a
d
:
*
`
 
|
 
S
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
e
 
(
o
w
n
 
R
e
d
i
s
)
 
|
 
N
o
t
 
a
f
f
e
c
t
e
d
 
(
s
e
p
a
r
a
t
e
)
 
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




R
e
d
i
s
 
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
 
e
x
t
e
r
n
a
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
 
i
s
 
a
n
 
i
n
t
e
r
n
a
l
 
c
a
c
h
e
/
s
t
o
r
e


c
o
n
s
u
m
e
d
 
b
y
 
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
 
I
n
t
e
r
c
o
m
 
c
a
c
h
e
s
 
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
 
(
k
e
y
:
 
`
i
n
t
e
r
c
o
m
:
t
o
k
e
n
:
<
c
o
n
s
u
m
e
r
>
:
<
t
a
r
g
e
t
>
`
,
 
T
T
L
:
 
3
0
0
s
)


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
 
K
e
y
c
l
o
a
k
 
c
a
c
h
e
s
 
s
e
s
s
i
o
n
s
/
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
 
C
e
p
h
 
C
S
I
 
d
r
i
v
e
r
 
(
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
)


-
 
M
i
n
I
O
 
(
S
3
 
b
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
 
f
o
r
 
R
D
B
 
s
n
a
p
s
h
o
t
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
]
(
.
.
/
k
e
y
c
l
o
a
k
/
)
 
(
s
e
s
s
i
o
n
/
t
o
k
e
n
 
c
a
c
h
e
)


-
 
[
N
e
x
t
c
l
o
u
d
]
(
.
.
/
n
e
x
t
c
l
o
u
d
/
)
 
(
f
i
l
e
 
l
o
c
k
i
n
g
 
c
a
c
h
e
)


-
 
[
E
l
e
m
e
n
t
]
(
.
.
/
e
l
e
m
e
n
t
/
)
 
(
m
e
s
s
a
g
e
 
c
a
c
h
e
)


-
 
[
N
o
t
e
s
]
(
.
.
/
n
o
t
e
s
/
)
 
(
Y
.
j
s
 
d
o
c
u
m
e
n
t
 
s
y
n
c
)


-
 
[
B
a
c
k
u
p
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
b
a
c
k
u
p
/
)
 
(
R
D
B
 
s
n
a
p
s
h
o
t
 
s
c
h
e
d
u
l
e
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
r
e
d
i
s
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
a
c
h
e
 
f
l
u
s
h
 
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
f
o
u
n
d
a
t
i
o
n
 
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
m
s
 
(
G
E
T
/
S
E
T
)
 
|
 
r
e
d
i
s
_
e
x
p
o
r
t
e
r
 
c
o
m
m
a
n
d
 
l
a
t
e
n
c
y
 
|


|
 
*
*
M
e
m
o
r
y
 
U
s
a
g
e
*
*
 
|
 
<
8
0
%
 
m
a
x
 
m
e
m
o
r
y
 
|
 
r
e
d
i
s
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
u
s
e
d
_
m
e
m
o
r
y
_
b
y
t
e
s
`
 
|


|
 
*
*
H
i
t
 
R
a
t
i
o
*
*
 
|
 
>
8
0
%
 
|
 
r
e
d
i
s
_
e
x
p
o
r
t
e
r
 
k
e
y
s
p
a
c
e
 
h
i
t
s
 
v
s
 
m
i
s
s
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
 
R
e
d
i
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
r
e
d
i
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
 
5
 
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
 
M
e
m
o
r
y
 
u
s
a
g
e
 
>
8
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
 
H
i
t
 
r
a
t
i
o
 
<
5
0
%
 
f
o
r
 
3
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
4
 
i
n
f
o




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
G
i
 
s
t
o
r
a
g
e


-
 
M
e
m
o
r
y
-
l
i
m
i
t
e
d
 
b
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
 
r
e
s
o
u
r
c
e
s




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
P
O
:
 
2
4
h
 
v
i
a
 
R
D
B
 
s
n
a
p
s
h
o
t
,
 
R
T
O
:
 
5
 
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
 
D
a
i
l
y
 
R
D
B
 
s
n
a
p
s
h
o
t
 
t
o
 
S
3
 
b
u
c
k
e
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
b
a
c
k
u
p
s
`


-
 
R
e
d
i
s
 
i
s
 
c
a
c
h
e
-
f
i
r
s
t
 
—
 
d
a
t
a
 
l
o
s
s
 
i
s
 
r
e
c
o
v
e
r
a
b
l
e
 
f
r
o
m
 
s
o
u
r
c
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
 
R
e
s
t
o
r
e
 
P
V
C
 
f
r
o
m
 
R
D
B
 
s
n
a
p
s
h
o
t
 
(
o
r
 
a
c
c
e
p
t
 
c
a
c
h
e
 
l
o
s
s
)


2
.
 
R
e
s
t
a
r
t
 
R
e
d
i
s
 
p
o
d


3
.
 
R
e
s
t
a
r
t
 
d
e
p
e
n
d
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
s
 
t
o
 
r
e
b
u
i
l
d
 
c
a
c
h
e
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
P
V
C
 
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
 
A
c
c
e
p
t
 
c
a
c
h
e
 
l
o
s
s
,
 
r
e
s
t
a
r
t
 
R
e
d
i
s
,
 
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
b
u
i
l
d
 
f
r
o
m
 
s
o
u
r
c
e


-
 
*
*
O
O
M
 
k
i
l
l
*
*
:
 
I
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
,
 
r
e
s
t
a
r
t
 
R
e
d
i
s


-
 
*
*
C
a
c
h
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
 
`
F
L
U
S
H
A
L
L
`
 
a
l
l
 
k
e
y
s
,
 
r
e
s
t
a
r
t
 
d
e
p
e
n
d
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
s




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
F
L
U
S
H
A
L
L
 
i
m
p
a
c
t
*
*
:
 
F
l
u
s
h
i
n
g
 
R
e
d
i
s
 
l
o
g
s
 
o
u
t
 
A
L
L
 
u
s
e
r
s
 
a
c
r
o
s
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
.
 
U
s
e
 
o
n
l
y
 
a
s
 
l
a
s
t
 
r
e
s
o
r
t
.
 
P
r
e
f
e
r
 
s
e
l
e
c
t
i
v
e
 
k
e
y
 
d
e
l
e
t
i
o
n
.


-
 
*
*
C
a
c
h
e
-
o
n
l
y
*
*
:
 
R
e
d
i
s
 
s
t
o
r
e
s
 
n
o
 
a
u
t
h
o
r
i
t
a
t
i
v
e
 
d
a
t
a
.
 
A
l
l
 
c
a
c
h
e
d
 
d
a
t
a
 
c
a
n
 
b
e
 
r
e
b
u
i
l
t
 
f
r
o
m
 
s
o
u
r
c
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
,
 
S
3
)
.


-
 
*
*
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
 
a
n
d
 
Z
a
m
m
a
d
*
*
:
 
T
h
e
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
 
r
u
n
 
t
h
e
i
r
 
o
w
n
 
s
e
p
a
r
a
t
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
s
,
 
N
O
T
 
t
h
e
 
s
h
a
r
e
d
 
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
`
.
 
F
L
U
S
H
A
L
L
 
o
n
 
s
h
a
r
e
d
 
R
e
d
i
s
 
d
o
e
s
 
N
O
T
 
a
f
f
e
c
t
 
t
h
e
m
.


-
 
*
*
K
e
y
 
p
r
e
f
i
x
 
c
o
l
l
i
s
i
o
n
s
*
*
:
 
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
 
M
U
S
T
 
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
 
k
e
y
 
p
r
e
f
i
x
.
 
M
i
s
s
i
n
g
 
p
r
e
f
i
x
e
s
 
c
a
u
s
e
 
c
r
o
s
s
-
s
e
r
v
i
c
e
 
c
a
c
h
e
 
p
o
l
l
u
t
i
o
n
.

