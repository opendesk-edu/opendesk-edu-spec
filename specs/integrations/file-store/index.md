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
 
F
i
l
e
 
S
t
o
r
e
 
I
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
t
e
g
r
a
t
i
o
n
 
b
e
t
w
e
e
n
 
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
 
w
o
r
k
 
p
a
c
k
a
g
e
s
 
a
n
d
 
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
 
s
t
o
r
a
g
e
,


e
n
a
b
l
i
n
g
 
p
e
r
-
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
 
t
h
a
t
 
l
i
v
e
 
i
n
 
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
n
o
t
 
d
u
p
l
i
c
a
t
e
d
 
i
n


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
)
.
 
T
h
e
 
t
r
u
s
t
 
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
 
i
s
 
b
o
o
t
s
t
r
a
p
p
e
d
 
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
 
d
u
r
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
 
v
i
a
 
t
h
e
 
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
o
p
e
n
p
r
o
j
e
c
t
-
b
o
o
t
s
t
r
a
p
`
 
j
o
b
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
 
f
i
l
e
 
s
t
o
r
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
 
(
o
n
l
y
 
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
 
+
 
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
 
W
e
b
D
A
V
 
d
i
r
e
c
t
 
a
c
c
e
s
s
 
(
f
i
l
e
s
 
a
r
e
 
m
a
n
a
g
e
d
 
v
i
a
 
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
 
U
I
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
 
B
o
o
t
s
t
r
a
p
 
t
r
u
s
t
 
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




T
h
e
 
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
o
p
e
n
p
r
o
j
e
c
t
-
b
o
o
t
s
t
r
a
p
`
 
j
o
b
 
S
H
A
L
L
 
c
o
n
f
i
g
u
r
e
 
t
h
e
 
t
r
u
s
t


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
 
b
e
t
w
e
e
n
 
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
 
a
n
d
 
N
e
x
t
c
l
o
u
d
 
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
 
d
u
r
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
.




B
o
o
t
s
t
r
a
p
 
S
H
A
L
L
 
b
e
 
i
d
e
m
p
o
t
e
n
t
 
—
 
r
u
n
n
i
n
g
 
m
u
l
t
i
p
l
e
 
t
i
m
e
s
 
S
H
A
L
L
 
N
O
T
 
c
r
e
a
t
e
 
d
u
p
l
i
c
a
t
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
s
 
o
r
 
f
a
i
l
 
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
 
t
r
u
s
t
 
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
 
T
r
u
s
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
e
d
 
o
n
 
d
e
p
l
o
y


-
 
G
I
V
E
N
 
b
o
t
h
 
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
 
a
n
d
 
N
e
x
t
c
l
o
u
d
 
d
e
p
l
o
y
e
d
 
s
u
c
c
e
s
s
f
u
l
l
y


 
 
-
 
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
:
 
A
P
I
 
e
n
d
p
o
i
n
t
 
`
h
t
t
p
s
:
/
/
o
p
e
n
p
r
o
j
e
c
t
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
 
N
e
x
t
c
l
o
u
d
:
 
A
P
I
 
e
n
d
p
o
i
n
t
 
`
h
t
t
p
s
:
/
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
 
t
h
e
 
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
o
p
e
n
p
r
o
j
e
c
t
-
b
o
o
t
s
t
r
a
p
`
 
j
o
b
 
r
u
n
s
 
i
n
 
t
h
e
 
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
 
n
a
m
e
s
p
a
c
e


-
 
T
H
E
N
 
i
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
s
 
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
 
f
i
l
e
 
s
t
o
r
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
 
i
n
 
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
 
v
i
a
 
A
P
I


 
 
-
 
P
O
S
T
 
`
/
a
p
i
/
v
3
/
s
t
o
r
a
g
e
s
`
 
w
i
t
h
 
N
e
x
t
c
l
o
u
d
 
O
A
u
t
h
2
 
c
l
i
e
n
t
 
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
 
E
n
a
b
l
e
s
 
t
h
e
 
`
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
_
o
p
e
n
p
r
o
j
e
c
t
`
 
N
e
x
t
c
l
o
u
d
 
a
p
p


 
 
-
 
S
e
t
s
 
u
p
 
O
A
u
t
h
2
 
t
o
k
e
n
 
e
x
c
h
a
n
g
e


-
 
A
N
D
 
t
h
e
 
f
i
l
e
 
s
t
o
r
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
 
i
n
 
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
 
s
e
t
t
i
n
g
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
 
A
N
D
 
t
h
e
 
j
o
b
 
u
s
e
s
 
a
d
m
i
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
:


 
 
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
:
 
`
s
e
c
r
e
t
s
.
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
a
d
m
i
n
P
a
s
s
w
o
r
d
`


 
 
-
 
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
:
 
`
s
e
c
r
e
t
s
.
o
p
e
n
p
r
o
j
e
c
t
.
a
p
i
A
d
m
i
n
U
s
e
r
n
a
m
e
`
 
+
 
`
s
e
c
r
e
t
s
.
o
p
e
n
p
r
o
j
e
c
t
.
a
p
i
A
d
m
i
n
P
a
s
s
w
o
r
d
`


-
 
A
N
D
 
t
h
e
 
j
o
b
 
e
x
i
t
s
 
w
i
t
h
 
s
u
c
c
e
s
s
 
(
e
x
i
t
 
c
o
d
e
 
0
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
 
B
o
o
t
s
t
r
a
p
 
r
u
n
s
 
t
w
i
c
e
 
(
i
d
e
m
p
o
t
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
 
t
h
e
 
t
r
u
s
t
 
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
 
a
l
r
e
a
d
y
 
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
 
f
r
o
m
 
a
 
p
r
e
v
i
o
u
s
 
d
e
p
l
o
y


-
 
W
H
E
N
 
t
h
e
 
b
o
o
t
s
t
r
a
p
 
j
o
b
 
r
u
n
s
 
a
g
a
i
n
 
(
e
.
g
.
,
 
c
l
u
s
t
e
r
 
r
e
s
t
a
r
t
)


-
 
T
H
E
N
 
i
t
 
q
u
e
r
i
e
s
 
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
'
s
 
`
/
a
p
i
/
v
3
/
s
t
o
r
a
g
e
s
`
 
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
N
D
 
d
e
t
e
c
t
s
 
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
 
N
e
x
t
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
 
A
N
D
 
e
x
i
t
s
 
s
u
c
c
e
s
s
f
u
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
 
m
o
d
i
f
i
c
a
t
i
o
n
 
(
n
o
 
d
u
p
l
i
c
a
t
e
 
s
t
o
r
a
g
e
 
c
r
e
a
t
e
d
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
 
B
o
o
t
s
t
r
a
p
 
a
f
t
e
r
 
p
a
r
t
i
a
l
 
f
a
i
l
u
r
e
 
(
r
e
t
r
y
 
l
o
g
i
c
)


-
 
G
I
V
E
N
 
a
 
b
o
o
t
s
t
r
a
p
 
j
o
b
 
t
h
a
t
 
f
a
i
l
e
d
 
m
i
d
w
a
y
 
(
e
.
g
.
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
 
w
a
s
 
n
o
t
 
r
e
a
d
y
,
 
r
e
t
u
r
n
e
d
 
5
0
3
)


-
 
W
H
E
N
 
t
h
e
 
J
o
b
 
i
s
 
r
e
t
r
i
e
d
 
(
k
8
s
 
J
o
b
 
b
a
c
k
o
f
f
L
i
m
i
t
:
 
6
)


-
 
T
H
E
N
 
i
t
 
d
e
t
e
c
t
s
 
i
n
c
o
m
p
l
e
t
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
 
(
m
i
s
s
i
n
g
 
s
t
o
r
a
g
e
 
e
n
t
r
y
)


-
 
A
N
D
 
c
o
m
p
l
e
t
e
s
 
t
h
e
 
r
e
m
a
i
n
i
n
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
 
s
t
e
p
s


-
 
A
N
D
 
t
h
e
 
t
r
u
s
t
 
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
 
i
s
 
f
u
l
l
y
 
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
i
l
e
 
s
t
o
r
e
 
a
c
t
i
v
a
t
i
o
n
 
p
e
r
 
p
r
o
j
e
c
t




P
r
o
j
e
c
t
 
a
d
m
i
n
s
 
S
H
A
L
L
 
e
n
a
b
l
e
 
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
 
f
i
l
e
 
s
t
o
r
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
 
a
t
 
t
h
e
 
p
r
o
j
e
c
t


l
e
v
e
l
 
(
N
O
T
 
g
l
o
b
a
l
l
y
 
e
n
f
o
r
c
e
d
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
r
o
j
e
c
t
 
a
d
m
i
n
 
e
n
a
b
l
e
s
 
f
i
l
e
 
s
t
o
r
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
 
s
t
o
r
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
 
a
t
 
c
l
u
s
t
e
r
 
l
e
v
e
l


-
 
A
N
D
 
a
 
p
r
o
j
e
c
t
 
a
d
m
i
n
 
a
c
c
e
s
s
e
s
 
p
r
o
j
e
c
t
 
s
e
t
t
i
n
g
s
 
i
n
 
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


-
 
W
H
E
N
 
t
h
e
 
p
r
o
j
e
c
t
 
a
d
m
i
n
 
e
n
a
b
l
e
s
 
"
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
 
s
t
o
r
a
g
e
"
 
i
n
 
p
r
o
j
e
c
t
 
s
e
t
t
i
n
g
s


-
 
T
H
E
N
 
p
r
o
j
e
c
t
 
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
 
a
t
t
a
c
h
 
f
i
l
e
s
 
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
 
t
o
 
w
o
r
k
 
p
a
c
k
a
g
e
s


-
 
A
N
D
 
a
l
l
 
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
o
l
d
e
r
:


 
 
-
 
`
/
F
i
l
e
s
/
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
/
p
r
o
j
e
c
t
s
/
{
p
r
o
j
e
c
t
I
d
}
/
`


-
 
A
N
D
 
f
i
l
e
s
 
r
e
m
a
i
n
 
s
t
o
r
e
d
 
i
n
 
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
N
O
T
 
d
u
p
l
i
c
a
t
e
d
 
i
n
 
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
'
s
 
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
i
l
e
 
v
e
r
s
i
o
n
i
n
g
 
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




F
i
l
e
s
 
a
t
t
a
c
h
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
 
t
o
 
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
 
w
o
r
k
 
p
a
c
k
a
g
e
s
 
S
H
A
L
L
 
r
e
t
a
i
n


N
e
x
t
c
l
o
u
d
'
s
 
v
e
r
s
i
o
n
 
h
i
s
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
 
F
i
l
e
 
v
e
r
s
i
o
n
 
a
c
c
e
s
s


-
 
G
I
V
E
N
 
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
 
f
i
l
e
 
`
c
o
n
t
r
a
c
t
.
p
d
f
`
 
w
i
t
h
 
3
 
v
e
r
s
i
o
n
s


 
 
-
 
v
1
:
 
I
n
i
t
i
a
l
 
d
r
a
f
t


 
 
-
 
v
2
:
 
R
e
v
i
s
i
o
n
 
1


 
 
-
 
v
3
:
 
F
i
n
a
l
 
(
c
u
r
r
e
n
t
)


-
 
A
N
D
 
t
h
e
 
f
i
l
e
 
i
s
 
a
t
t
a
c
h
e
d
 
t
o
 
a
n
 
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
 
w
o
r
k
 
p
a
c
k
a
g
e


-
 
W
H
E
N
 
a
 
p
r
o
j
e
c
t
 
m
e
m
b
e
r
 
v
i
e
w
s
 
t
h
e
 
f
i
l
e
 
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
 
i
n
 
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
 
U
I


-
 
T
H
E
N
 
a
l
l
 
h
i
s
t
o
r
i
c
a
l
 
v
e
r
s
i
o
n
s
 
a
r
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
 
N
e
x
t
c
l
o
u
d
'
s
 
v
e
r
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


 
 
-
 
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
 
d
i
s
p
l
a
y
s
 
a
 
v
e
r
s
i
o
n
 
s
e
l
e
c
t
o
r
 
d
r
o
p
d
o
w
n


 
 
-
 
S
e
l
e
c
t
i
n
g
 
a
 
v
e
r
s
i
o
n
 
o
p
e
n
s
 
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
 
v
e
r
s
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
 
f
i
l
e
 
i
s
 
N
O
T
 
d
u
p
l
i
c
a
t
e
d
 
i
n
 
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
'
s
 
s
t
o
r
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
 
O
A
u
t
h
2
 
t
o
k
e
n
 
r
e
f
r
e
s
h




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
 
S
H
A
L
L
 
m
a
i
n
t
a
i
n
 
a
 
v
a
l
i
d
 
O
A
u
t
h
2
 
a
c
c
e
s
s
 
t
o
k
e
n
 
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
,
 
r
e
f
r
e
s
h
i
n
g


i
t
 
a
s
 
n
e
e
d
e
d
 
v
i
a
 
t
o
k
e
n
 
r
e
f
r
e
s
h
 
w
o
r
k
f
l
o
w
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
A
u
t
h
2
 
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
e
s
 
a
n
d
 
i
s
 
r
e
f
r
e
s
h
e
d


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
i
t
i
a
l
 
O
A
u
t
h
2
 
a
c
c
e
s
s
 
t
o
k
e
n
 
w
i
t
h
 
1
-
h
o
u
r
 
e
x
p
i
r
y


-
 
A
N
D
 
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
 
c
o
n
t
i
n
u
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
 
f
i
l
e
 
s
t
o
r
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


-
 
W
H
E
N
 
t
h
e
 
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
e
s
 
(
4
0
1
 
U
n
a
u
t
h
o
r
i
z
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
)


-
 
T
H
E
N
 
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
'
s
 
O
A
u
t
h
2
 
c
l
i
e
n
t
 
r
e
f
r
e
s
h
e
s
 
t
h
e
 
t
o
k
e
n
 
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
'
s
 
`
/
o
a
u
t
h
/
t
o
k
e
n
`
 
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
N
D
 
f
i
l
e
 
s
t
o
r
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
s
 
r
e
s
u
m
e
 
w
i
t
h
 
t
h
e
 
n
e
w
 
t
o
k
e
n




#
#
 
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
 
F
i
l
e
 
S
t
o
r
e




#
#
#
 
P
O
S
T
 
/
a
p
i
/
v
3
/
s
t
o
r
a
g
e
s
 
(
C
r
e
a
t
e
 
S
t
o
r
a
g
e
)




C
r
e
a
t
e
s
 
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




*
*
R
e
q
u
e
s
t
:
*
*


`
`
`
j
s
o
n


P
O
S
T
 
/
a
p
i
/
v
3
/
s
t
o
r
a
g
e
s


A
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
:
 
B
e
a
r
e
r
 
<
o
p
a
q
u
e
-
a
d
m
i
n
-
t
o
k
e
n
>


C
o
n
t
e
n
t
-
T
y
p
e
:
 
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
/
v
n
d
.
a
p
i
+
j
s
o
n




{


 
 
"
d
a
t
a
"
:
 
{


 
 
 
 
"
t
y
p
e
"
:
 
"
s
t
o
r
a
g
e
s
"
,


 
 
 
 
"
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
"
:
 
{


 
 
 
 
 
 
"
n
a
m
e
"
:
 
"
N
e
x
t
c
l
o
u
d
"
,


 
 
 
 
 
 
"
o
r
i
g
i
n
"
:
 
"
n
e
x
t
c
l
o
u
d
"
,


 
 
 
 
 
 
"
p
r
o
v
i
d
e
r
T
y
p
e
"
:
 
"
n
e
x
t
c
l
o
u
d
"
,


 
 
 
 
 
 
"
o
a
u
t
h
C
l
i
e
n
t
I
d
"
:
 
"
o
p
e
n
d
e
s
k
-
o
p
e
n
p
r
o
j
e
c
t
"
,


 
 
 
 
 
 
"
o
a
u
t
h
C
l
i
e
n
t
S
e
c
r
e
t
"
:
 
"
<
o
p
a
q
u
e
-
c
l
i
e
n
t
-
s
e
c
r
e
t
>
"
,


 
 
 
 
 
 
"
h
o
s
t
"
:
 
"
h
t
t
p
s
:
/
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
"
,


 
 
 
 
 
 
"
b
a
s
e
U
r
l
"
:
 
"
h
t
t
p
s
:
/
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
"
,


 
 
 
 
 
 
"
s
t
o
r
a
g
e
N
o
n
c
e
"
:
 
"
<
o
p
a
q
u
e
-
n
o
n
c
e
-
1
2
3
4
>
"


 
 
 
 
}


 
 
}


}


`
`
`




*
*
R
e
s
p
o
n
s
e
 
(
2
0
1
 
C
r
e
a
t
e
d
)
:
*
*


`
`
`
j
s
o
n


{


 
 
"
d
a
t
a
"
:
 
{


 
 
 
 
"
i
d
"
:
 
"
1
"
,


 
 
 
 
"
t
y
p
e
"
:
 
"
s
t
o
r
a
g
e
s
"
,


 
 
 
 
"
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
"
:
 
{


 
 
 
 
 
 
"
n
a
m
e
"
:
 
"
N
e
x
t
c
l
o
u
d
"
,


 
 
 
 
 
 
"
o
r
i
g
i
n
"
:
 
"
n
e
x
t
c
l
o
u
d
"
,


 
 
 
 
 
 
"
h
o
s
t
"
:
 
"
h
t
t
p
s
:
/
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
"


 
 
 
 
}


 
 
}


}


`
`
`




#
#
#
 
G
E
T
 
/
a
p
i
/
v
3
/
s
t
o
r
a
g
e
s
/
{
i
d
}
/
f
i
l
e
s
 
(
L
i
s
t
 
F
i
l
e
s
)




L
i
s
t
s
 
f
i
l
e
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
 
f
r
o
m
 
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
r
o
j
e
c
t
.




*
*
R
e
q
u
e
s
t
:
*
*


`
`
`
j
s
o
n


G
E
T
 
/
a
p
i
/
v
3
/
s
t
o
r
a
g
e
s
/
1
/
f
i
l
e
s
?
f
i
l
t
e
r
=
[
{
 
"
f
i
e
l
d
"
:
 
"
o
r
i
g
i
n
"
,
 
"
o
p
e
r
a
t
o
r
"
:
 
"
=
"
,
 
"
v
a
l
u
e
s
"
:
 
[
"
n
e
x
t
c
l
o
u
d
"
]
 
}
]


A
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
:
 
B
e
a
r
e
r
 
<
o
p
a
q
u
e
-
a
d
m
i
n
-
t
o
k
e
n
>


`
`
`




*
*
R
e
s
p
o
n
s
e
 
(
2
0
0
 
O
K
)
:
*
*


`
`
`
j
s
o
n


{


 
 
"
d
a
t
a
"
:
 
[


 
 
 
 
{


 
 
 
 
 
 
"
i
d
"
:
 
"
1
2
3
"
,


 
 
 
 
 
 
"
t
y
p
e
"
:
 
"
f
i
l
e
s
"
,


 
 
 
 
 
 
"
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
"
:
 
{


 
 
 
 
 
 
 
 
"
n
a
m
e
"
:
 
"
c
o
n
t
r
a
c
t
.
p
d
f
"
,


 
 
 
 
 
 
 
 
"
m
i
m
e
T
y
p
e
"
:
 
"
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
/
p
d
f
"
,


 
 
 
 
 
 
 
 
"
s
i
z
e
"
:
 
2
0
4
8
5
7
6
,


 
 
 
 
 
 
 
 
"
c
r
e
a
t
e
d
A
t
"
:
 
"
2
0
2
6
-
0
6
-
2
7
T
1
0
:
0
0
:
0
0
Z
"


 
 
 
 
 
 
}


 
 
 
 
}


 
 
]


}


`
`
`




#
#
#
 
P
O
S
T
 
/
a
p
i
/
v
3
/
p
r
o
j
e
c
t
s
/
{
i
d
}
/
f
i
l
e
_
l
i
n
k
s
 
(
A
t
t
a
c
h
 
F
i
l
e
)




L
i
n
k
s
 
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
 
f
i
l
e
 
t
o
 
a
n
 
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
 
w
o
r
k
 
p
a
c
k
a
g
e
.




*
*
R
e
q
u
e
s
t
:
*
*


`
`
`
j
s
o
n


P
O
S
T
 
/
a
p
i
/
v
3
/
p
r
o
j
e
c
t
s
/
4
5
6
/
w
o
r
k
_
p
a
c
k
a
g
e
s
/
7
8
9
/
f
i
l
e
_
l
i
n
k
s


A
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
:
 
B
e
a
r
e
r
 
<
o
p
a
q
u
e
-
p
r
o
j
e
c
t
-
t
o
k
e
n
>


C
o
n
t
e
n
t
-
T
y
p
e
:
 
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
/
v
n
d
.
a
p
i
+
j
s
o
n




{


 
 
"
d
a
t
a
"
:
 
{


 
 
 
 
"
t
y
p
e
"
:
 
"
f
i
l
e
_
l
i
n
k
s
"
,


 
 
 
 
"
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
s
"
:
 
{


 
 
 
 
 
 
"
c
o
n
t
a
i
n
e
r
"
:
 
{


 
 
 
 
 
 
 
 
"
d
a
t
a
"
:
 
{
 
"
t
y
p
e
"
:
 
"
w
o
r
k
_
p
a
c
k
a
g
e
s
"
,
 
"
i
d
"
:
 
"
7
8
9
"
 
}


 
 
 
 
 
 
}
,


 
 
 
 
 
 
"
f
i
l
e
"
:
 
{


 
 
 
 
 
 
 
 
"
m
e
t
a
"
:
 
{
 
"
o
r
i
g
i
n
"
:
 
"
n
e
x
t
c
l
o
u
d
"
,
 
"
i
d
"
:
 
"
1
2
3
"
 
}


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}


}


`
`
`




*
*
R
e
s
p
o
n
s
e
 
(
2
0
1
 
C
r
e
a
t
e
d
)
:
*
*


`
`
`
j
s
o
n


{


 
 
"
d
a
t
a
"
:
 
{


 
 
 
 
"
i
d
"
:
 
"
9
9
9
"
,


 
 
 
 
"
t
y
p
e
"
:
 
"
f
i
l
e
_
l
i
n
k
s
"
,


 
 
 
 
"
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
"
:
 
{


 
 
 
 
 
 
"
c
r
e
a
t
e
d
A
t
"
:
 
"
2
0
2
6
-
0
6
-
2
7
T
1
0
:
0
5
:
0
0
Z
"


 
 
 
 
}


 
 
}


}


`
`
`




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
 
O
A
u
t
h
2
 
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




#
#
#
 
O
A
u
t
h
2
 
C
l
i
e
n
t
 
R
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
 
r
e
g
i
s
t
e
r
s
 
a
s
 
a
n
 
O
A
u
t
h
2
 
c
l
i
e
n
t
 
i
n
 
N
e
x
t
c
l
o
u
d
:




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
 
C
l
i
e
n
t
 
I
D
 
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
o
p
e
n
p
r
o
j
e
c
t
`
 
|


|
 
R
e
d
i
r
e
c
t
 
U
R
I
 
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
o
p
e
n
p
r
o
j
e
c
t
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
o
a
u
t
h
/
c
a
l
l
b
a
c
k
`
 
|


|
 
G
r
a
n
t
 
T
y
p
e
 
|
 
A
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
 
C
o
d
e
 
|


|
 
S
c
o
p
e
 
|
 
`
f
i
l
e
s
 
A
N
D
 
r
e
a
d
`
 
|




O
A
u
t
h
2
 
c
l
i
e
n
t
 
s
e
c
r
e
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
o
p
e
n
p
r
o
j
e
c
t
-
s
e
c
r
e
t
s
`


u
n
d
e
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
O
a
u
t
h
C
l
i
e
n
t
S
e
c
r
e
t
`
.




#
#
 
B
o
o
t
s
t
r
a
p
 
J
o
b
 
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
 
J
o
b
 
n
a
m
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
o
p
e
n
p
r
o
j
e
c
t
-
b
o
o
t
s
t
r
a
p
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
`
 
|


|
 
I
m
a
g
e
 
|
 
`
r
e
g
i
s
t
r
y
.
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
o
p
e
n
p
r
o
j
e
c
t
-
b
o
o
t
s
t
r
a
p
`
 
|


|
 
B
a
c
k
o
f
f
 
l
i
m
i
t
 
|
 
6
 
(
r
e
t
r
y
 
i
f
 
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
 
n
o
t
 
r
e
a
d
y
)
 
|


|
 
C
o
m
p
l
e
t
i
o
n
 
m
o
d
e
 
|
 
`
N
o
n
I
n
d
e
x
e
d
`
 
(
r
u
n
s
 
m
u
l
t
i
p
l
e
 
p
o
d
s
 
i
f
 
m
u
l
t
i
p
l
e
 
j
o
b
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
 
a
d
m
i
n
:
 
`
s
e
c
r
e
t
s
.
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
a
d
m
i
n
P
a
s
s
w
o
r
d
`
 
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
 
a
d
m
i
n
:
 
`
s
e
c
r
e
t
s
.
o
p
e
n
p
r
o
j
e
c
t
.
a
p
i
A
d
m
i
n
U
s
e
r
n
a
m
e
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
o
p
e
n
p
r
o
j
e
c
t
.
a
p
i
A
d
m
i
n
P
a
s
s
w
o
r
d
`
 
|


 
 
|
 
O
A
u
t
h
2
 
s
e
c
r
e
t
:
 
`
s
e
c
r
e
t
s
.
o
p
e
n
d
e
s
k
-
o
p
e
n
p
r
o
j
e
c
t
.
n
e
x
t
c
l
o
u
d
O
a
u
t
h
C
l
i
e
n
t
S
e
c
r
e
t
`
 
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
A
P
I
 
v
3
,
 
O
A
u
t
h
2
 
c
l
i
e
n
t
 
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
`
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
_
o
p
e
n
p
r
o
j
e
c
t
`
 
a
p
p
,
 
O
A
u
t
h
2
 
s
e
r
v
e
r
)


-
 
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
 
`
s
e
c
r
e
t
s
.
o
p
e
n
d
e
s
k
-
o
p
e
n
p
r
o
j
e
c
t
.
n
e
x
t
c
l
o
u
d
O
a
u
t
h
C
l
i
e
n
t
S
e
c
r
e
t
`




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
]
(
.
/
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
/
)
 
(
u
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
 
l
i
n
k
i
n
g
)


-
 
[
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
]
(
.
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
)
 
(
O
A
u
t
h
2
 
t
o
k
e
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
)


-
 
`
.
.
/
_
r
e
g
i
s
t
r
y
/
i
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
-
m
a
t
r
i
x
/
`
 
(
D
A
T
A
 
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
:
 
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

