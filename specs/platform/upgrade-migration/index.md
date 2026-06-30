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
 
U
p
g
r
a
d
e
 
a
n
d
 
M
i
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




D
e
f
i
n
e
s
 
p
r
o
c
e
d
u
r
e
s
 
f
o
r
 
u
p
g
r
a
d
i
n
g
 
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
 
b
e
t
w
e
e
n
 
v
e
r
s
i
o
n
s
,


m
i
g
r
a
t
i
n
g
 
d
a
t
a
 
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
,
 
a
n
d
 
h
a
n
d
l
i
n
g
 
s
c
h
e
m
a
 
m
i
g
r
a
t
i
o
n
s
.
 
C
o
v
e
r
s


h
e
l
m
f
i
l
e
-
b
a
s
e
d
 
u
p
g
r
a
d
e
s
,
 
d
a
t
a
b
a
s
e
 
s
c
h
e
m
a
 
c
h
a
n
g
e
s
,
 
a
n
d
 
d
a
t
a
 
m
i
g
r
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
 
I
n
i
t
i
a
l
 
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
s
e
e
 
`
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
/
`
)


-
 
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
 
u
p
g
r
a
d
e
s
 
(
K
3
s
,
 
C
e
p
h
,
 
O
S
 
—
 
H
R
Z
 
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
-
-




#
#
 
U
p
g
r
a
d
e
 
S
t
r
a
t
e
g
y




#
#
#
 
H
e
l
m
f
i
l
e
-
B
a
s
e
d
 
U
p
g
r
a
d
e
s




A
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
 
v
i
a
 
h
e
l
m
f
i
l
e
.
 
U
p
g
r
a
d
e
s
 
f
o
l
l
o
w
 
t
h
e


s
a
m
e
 
p
a
t
t
e
r
n
:
 
u
p
d
a
t
e
 
i
m
a
g
e
 
t
a
g
s
 
i
n
 
v
a
l
u
e
s
,
 
r
u
n
 
`
h
e
l
m
f
i
l
e
 
s
y
n
c
`
,
 
v
e
r
i
f
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
p
g
r
a
d
e
 
a
 
s
i
n
g
l
e
 
s
e
r
v
i
c
e




1
.
 
U
p
d
a
t
e
 
i
m
a
g
e
 
t
a
g
 
i
n
 
`
a
p
p
s
/
<
s
e
r
v
i
c
e
>
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


2
.
 
V
e
r
i
f
y
 
u
p
g
r
a
d
e
 
n
o
t
e
s
 
f
r
o
m
 
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
 
c
h
a
n
g
e
l
o
g


3
.
 
R
u
n
 
`
h
e
l
m
f
i
l
e
 
-
e
 
<
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
>
 
-
f
 
h
e
l
m
f
i
l
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
 
s
y
n
c
`


4
.
 
V
e
r
i
f
y
 
p
o
d
s
 
a
r
e
 
r
u
n
n
i
n
g
 
a
n
d
 
h
e
a
l
t
h
y


5
.
 
R
u
n
 
p
o
s
t
-
u
p
g
r
a
d
e
 
s
m
o
k
e
 
t
e
s
t
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
 
R
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
 
w
i
t
h
 
z
e
r
o
 
d
o
w
n
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
 
>
 
1
`


-
 
W
H
E
N
 
`
h
e
l
m
f
i
l
e
 
s
y
n
c
`
 
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
e
w
 
i
m
a
g
e


-
 
T
H
E
N
 
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
 
p
e
r
f
o
r
m
s
 
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
 
o
l
d
 
p
o
d
s
 
r
e
m
a
i
n
 
r
u
n
n
i
n
g
 
u
n
t
i
l
 
n
e
w
 
p
o
d
s
 
p
a
s
s
 
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


-
 
A
N
D
 
n
o
 
d
o
w
n
t
i
m
e
 
o
c
c
u
r
s
 
i
f
 
r
o
l
l
b
a
c
k
 
l
i
m
i
t
 
i
s
 
>
 
1




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
r
e
p
l
i
c
a
 
s
e
r
v
i
c
e
 
u
p
g
r
a
d
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
 
W
H
E
N
 
`
h
e
l
m
f
i
l
e
 
s
y
n
c
`
 
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
e
w
 
i
m
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
r
e
 
i
s
 
b
r
i
e
f
 
d
o
w
n
t
i
m
e
 
(
p
o
d
 
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
 
+
 
n
e
w
 
p
o
d
 
s
t
a
r
t
u
p
)


-
 
A
N
D
 
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
 
m
u
s
t
 
b
e
 
s
u
f
f
i
c
i
e
n
t
 
f
o
r
 
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
 
t
o
 
i
n
i
t
i
a
l
i
z
e




#
#
#
 
I
m
a
g
e
 
T
a
g
 
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




I
m
a
g
e
 
t
a
g
s
 
S
H
O
U
L
D
 
b
e
 
p
i
n
n
e
d
 
t
o
 
s
p
e
c
i
f
i
c
 
v
e
r
s
i
o
n
s
 
i
n
 
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
.




|
 
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
 
|
 
T
a
g
 
P
o
l
i
c
y
 
|
 
E
x
a
m
p
l
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
|


|
 
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
 
|
 
`
l
a
t
e
s
t
`
 
o
r
 
`
m
a
i
n
`
 
b
r
a
n
c
h
 
|
 
`
l
a
t
e
s
t
`
 
|


|
 
S
t
a
g
i
n
g
 
|
 
S
p
e
c
i
f
i
c
 
v
e
r
s
i
o
n
 
t
a
g
 
|
 
`
v
1
.
0
.
0
-
r
c
1
`
 
|


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
 
|
 
S
H
A
2
5
6
 
d
i
g
e
s
t
 
o
r
 
p
i
n
n
e
d
 
v
e
r
s
i
o
n
 
|
 
`
s
h
a
2
5
6
:
a
b
c
1
2
3
.
.
.
`
 
|




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
-
S
p
e
c
i
f
i
c
 
U
p
g
r
a
d
e
 
P
r
o
c
e
d
u
r
e
s




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




#
#
#
#
 
P
r
e
-
u
p
g
r
a
d
e


1
.
 
V
e
r
i
f
y
 
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
:
 
`
k
u
b
e
c
t
l
 
e
x
e
c
 
-
n
 
o
p
e
n
d
e
s
k
 
u
m
s
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
0
 
-
-
 
p
g
_
i
s
r
e
a
d
y
`


2
.
 
B
a
c
k
 
u
p
 
K
e
y
c
l
o
a
k
 
d
a
t
a
b
a
s
e
:
 
`
p
g
_
d
u
m
p
 
-
F
c
 
k
e
y
c
l
o
a
k
 
>
 
k
e
y
c
l
o
a
k
.
d
u
m
p
`


3
.
 
N
o
t
e
 
c
u
r
r
e
n
t
 
v
e
r
s
i
o
n
:
 
`
k
u
b
e
c
t
l
 
e
x
e
c
 
-
n
 
o
p
e
n
d
e
s
k
 
u
m
s
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
0
 
-
-
 
/
o
p
t
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
b
i
n
/
k
c
.
s
h
 
v
e
r
s
i
o
n
`




#
#
#
#
 
U
p
g
r
a
d
e


1
.
 
U
p
d
a
t
e
 
K
e
y
c
l
o
a
k
 
i
m
a
g
e
 
t
a
g


2
.
 
R
u
n
 
`
h
e
l
m
f
i
l
e
 
s
y
n
c
`
 
—
 
K
e
y
c
l
o
a
k
 
h
a
n
d
l
e
s
 
s
c
h
e
m
a
 
m
i
g
r
a
t
i
o
n
 
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


3
.
 
V
e
r
i
f
y
:
 
a
c
c
e
s
s
 
`
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
`
 
→
 
s
t
a
t
u
s
 
2
0
0




#
#
#
#
 
R
o
l
l
b
a
c
k


1
.
 
R
e
v
e
r
t
 
i
m
a
g
e
 
t
a
g
 
t
o
 
p
r
e
v
i
o
u
s
 
v
e
r
s
i
o
n


2
.
 
R
u
n
 
`
h
e
l
m
f
i
l
e
 
s
y
n
c
`


3
.
 
I
f
 
s
c
h
e
m
a
 
m
i
g
r
a
t
i
o
n
 
i
s
 
i
r
r
e
v
e
r
s
i
b
l
e
,
 
r
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
 
d
u
m
p




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
 
(
A
I
O
)




#
#
#
#
 
P
r
e
-
u
p
g
r
a
d
e


1
.
 
E
n
a
b
l
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
 
m
o
d
e
:
 
`
k
u
b
e
c
t
l
 
e
x
e
c
 
-
n
 
o
p
e
n
d
e
s
k
 
<
p
o
d
>
 
-
-
 
p
h
p
 
o
c
c
 
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
:
m
o
d
e
 
-
-
o
n
`


2
.
 
B
a
c
k
 
u
p
 
d
a
t
a
b
a
s
e
:
 
`
k
u
b
e
c
t
l
 
e
x
e
c
 
-
n
 
o
p
e
n
d
e
s
k
 
<
p
o
s
t
g
r
e
s
-
p
o
d
>
 
-
-
 
p
g
_
d
u
m
p
 
-
F
c
 
n
e
x
t
c
l
o
u
d
 
>
 
n
c
.
d
u
m
p
`


3
.
 
B
a
c
k
 
u
p
 
S
3
 
d
a
t
a
 
(
v
e
r
i
f
y
 
k
8
u
p
 
s
n
a
p
s
h
o
t
 
e
x
i
s
t
s
)




#
#
#
#
 
U
p
g
r
a
d
e


1
.
 
U
p
d
a
t
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
 
i
m
a
g
e
 
t
a
g


2
.
 
R
u
n
 
`
h
e
l
m
f
i
l
e
 
s
y
n
c
`


3
.
 
R
u
n
 
u
p
g
r
a
d
e
 
v
i
a
 
A
I
O
:
 
`
k
u
b
e
c
t
l
 
e
x
e
c
 
-
n
 
o
p
e
n
d
e
s
k
 
<
p
o
d
>
 
-
-
 
p
h
p
 
o
c
c
 
u
p
g
r
a
d
e
`


4
.
 
D
i
s
a
b
l
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
 
m
o
d
e
:
 
`
k
u
b
e
c
t
l
 
e
x
e
c
 
-
n
 
o
p
e
n
d
e
s
k
 
<
p
o
d
>
 
-
-
 
p
h
p
 
o
c
c
 
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
:
m
o
d
e
 
-
-
o
f
f
`




#
#
#
#
 
P
o
s
t
-
u
p
g
r
a
d
e


1
.
 
V
e
r
i
f
y
 
`
/
s
t
a
t
u
s
.
p
h
p
`
 
r
e
t
u
r
n
s
 
h
e
a
l
t
h
y


2
.
 
R
u
n
 
`
o
c
c
 
s
t
a
t
u
s
`
 
t
o
 
c
h
e
c
k
 
a
p
p
 
c
o
m
p
a
t
i
b
i
l
i
t
y


3
.
 
V
e
r
i
f
y
 
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
 
(
S
3
)




#
#
#
 
D
a
t
a
b
a
s
e
 
U
p
g
r
a
d
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
 
/
 
M
a
r
i
a
D
B
)




#
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
 
m
i
n
o
r
 
v
e
r
s
i
o
n
 
u
p
g
r
a
d
e


1
.
 
U
p
d
a
t
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
 
i
m
a
g
e
 
t
a
g


2
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
 
a
u
t
o
-
u
p
g
r
a
d
e
s
 
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
 
o
n
 
f
i
r
s
t
 
s
t
a
r
t


3
.
 
R
u
n
 
`
h
e
l
m
f
i
l
e
 
s
y
n
c
`
 
w
i
t
h
 
`
m
a
x
U
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
 
1
`


4
.
 
V
e
r
i
f
y
:
 
`
S
E
L
E
C
T
 
v
e
r
s
i
o
n
(
)
`
 
r
e
t
u
r
n
s
 
n
e
w
 
v
e
r
s
i
o
n




#
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
 
m
a
j
o
r
 
v
e
r
s
i
o
n
 
u
p
g
r
a
d
e


1
.
 
B
a
c
k
 
u
p
 
a
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
s
:
 
`
p
g
_
d
u
m
p
a
l
l
 
>
 
f
u
l
l
_
b
a
c
k
u
p
.
s
q
l
`


2
.
 
D
e
p
l
o
y
 
n
e
w
 
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
 
m
a
j
o
r
 
v
e
r
s
i
o
n
 
a
l
o
n
g
s
i
d
e
 
o
l
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


3
.
 
M
i
g
r
a
t
e
 
d
a
t
a
:
 
`
p
g
_
u
p
g
r
a
d
e
 
-
-
o
l
d
-
d
a
t
a
d
i
r
 
/
v
a
r
/
l
i
b
/
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
/
o
l
d
 
-
-
n
e
w
-
d
a
t
a
d
i
r
 
/
v
a
r
/
l
i
b
/
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
/
n
e
w
`


4
.
 
S
w
i
t
c
h
 
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
n
e
c
t
i
o
n
s
 
t
o
 
n
e
w
 
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


5
.
 
R
e
m
o
v
e
 
o
l
d
 
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




#
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
 
p
a
s
s
w
o
r
d
 
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


-
 
K
N
O
W
N
 
I
S
S
U
E
:
 
H
e
l
m
-
d
e
p
l
o
y
e
d
 
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
 
m
a
y
 
d
i
f
f
e
r
 
f
r
o
m
 
i
n
i
t
i
a
l
 
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
f
t
e
r
 
u
p
g
r
a
d
e
:
 
v
e
r
i
f
y
 
`
A
L
T
E
R
 
U
S
E
R
`
 
i
f
 
n
e
e
d
e
d


-
 
C
h
e
c
k
 
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
f
i
g
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
 
c
o
r
r
e
c
t
 
p
a
s
s
w
o
r
d




-
-
-




#
#
 
D
a
t
a
 
M
i
g
r
a
t
i
o
n
 
P
r
o
c
e
d
u
r
e
s




#
#
#
 
S
e
r
v
i
c
e
 
M
i
g
r
a
t
i
o
n
 
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
 
→
 
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




W
h
e
n
 
s
w
i
t
c
h
i
n
g
 
f
r
o
m
 
o
n
e
 
s
e
r
v
i
c
e
 
t
o
 
a
n
o
t
h
e
r
 
(
m
u
t
u
a
l
 
e
x
c
l
u
s
i
v
i
t
y
)
:




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
i
g
r
a
t
e
 
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
C
l
o
u
d


1
.
 
E
x
p
o
r
t
 
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
a
t
a
 
v
i
a
 
`
o
c
c
 
f
i
l
e
s
:
s
c
a
n
 
-
-
p
a
t
h
=
/
`


2
.
 
D
o
c
u
m
e
n
t
 
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
 
l
a
y
o
u
t
 
(
b
u
c
k
e
t
 
s
t
r
u
c
t
u
r
e
,
 
f
i
l
e
 
p
a
t
h
s
)


3
.
 
C
o
n
f
i
g
u
r
e
 
O
p
e
n
C
l
o
u
d
 
w
i
t
h
 
s
a
m
e
 
S
3
 
b
u
c
k
e
t
 
o
r
 
n
e
w
 
b
u
c
k
e
t


4
.
 
I
m
p
o
r
t
 
d
a
t
a
 
i
n
t
o
 
O
p
e
n
C
l
o
u
d
 
v
i
a
 
C
S
3
 
p
r
o
t
o
c
o
l


5
.
 
V
e
r
i
f
y
 
f
i
l
e
 
i
n
t
e
g
r
i
t
y
:
 
c
h
e
c
k
s
u
m
 
c
o
m
p
a
r
i
s
o
n


6
.
 
U
p
d
a
t
e
 
p
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
 
t
o
 
p
o
i
n
t
 
t
o
 
O
p
e
n
C
l
o
u
d


7
.
 
D
i
s
a
b
l
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
:
 
r
e
m
o
v
e
 
f
r
o
m
 
h
e
l
m
f
i
l
e
 
r
e
l
e
a
s
e
 
l
i
s
t


8
.
 
R
u
n
 
`
h
e
l
m
f
i
l
e
 
a
p
p
l
y
`
 
t
o
 
r
e
m
o
v
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
#
 
U
s
e
r
 
D
a
t
a
 
M
i
g
r
a
t
i
o
n
 
(
L
D
A
P
 
→
 
K
e
y
c
l
o
a
k
)




W
h
e
n
 
m
i
g
r
a
t
i
n
g
 
u
s
e
r
 
d
a
t
a
 
b
e
t
w
e
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
i
o
n
 
s
y
s
t
e
m
s
:




1
.
 
E
x
p
o
r
t
 
L
D
A
P
 
u
s
e
r
 
e
n
t
r
i
e
s
 
(
L
D
I
F
 
f
o
r
m
a
t
)


2
.
 
I
m
p
o
r
t
 
i
n
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
 
`
k
c
a
d
m
.
s
h
 
c
r
e
a
t
e
 
u
s
e
r
s
`


3
.
 
M
a
p
 
S
A
M
L
/
O
I
D
C
 
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
:
 
`
m
a
i
l
`
,
 
`
d
i
s
p
l
a
y
N
a
m
e
`
,
 
`
p
r
e
f
e
r
r
e
d
_
u
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
e
d
u
P
e
r
s
o
n
A
f
f
i
l
i
a
t
i
o
n
`


4
.
 
V
e
r
i
f
y
 
u
s
e
r
 
l
o
g
i
n
 
w
o
r
k
s
 
w
i
t
h
 
m
i
g
r
a
t
e
d
 
a
c
c
o
u
n
t
s


5
.
 
U
p
d
a
t
e
 
a
l
l
 
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
s
 
w
i
t
h
 
n
e
w
 
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




-
-
-




#
#
 
R
o
l
l
b
a
c
k
 
S
t
r
a
t
e
g
y




#
#
#
 
H
e
l
m
f
i
l
e
 
R
o
l
l
b
a
c
k




`
`
`
b
a
s
h


#
 
R
e
v
e
r
t
 
t
o
 
p
r
e
v
i
o
u
s
 
r
e
l
e
a
s
e
 
s
t
a
t
e


h
e
l
m
f
i
l
e
 
-
e
 
<
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
>
 
-
f
 
h
e
l
m
f
i
l
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
 
s
y
n
c
 
-
-
i
n
t
e
r
a
c
t
i
v
e




#
 
O
r
 
r
o
l
l
b
a
c
k
 
a
 
s
p
e
c
i
f
i
c
 
r
e
l
e
a
s
e


h
e
l
m
 
r
o
l
l
b
a
c
k
 
<
r
e
l
e
a
s
e
>
 
<
r
e
v
i
s
i
o
n
>
 
-
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
 
o
p
e
n
d
e
s
k


`
`
`




#
#
#
 
D
a
t
a
b
a
s
e
 
R
o
l
l
b
a
c
k




1
.
 
S
t
o
p
 
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
 
p
o
d
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
 
w
r
i
t
e
s


2
.
 
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
 
b
a
c
k
u
p
 
d
u
m
p
:
 
`
p
g
_
r
e
s
t
o
r
e
 
-
d
 
<
d
b
>
 
<
b
a
c
k
u
p
_
f
i
l
e
>
`


3
.
 
R
e
s
t
a
r
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
 
p
o
d
s


4
.
 
V
e
r
i
f
y
 
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




#
#
#
 
F
u
l
l
 
C
l
u
s
t
e
r
 
R
o
l
l
b
a
c
k




I
f
 
u
p
g
r
a
d
e
 
c
a
u
s
e
s
 
w
i
d
e
s
p
r
e
a
d
 
f
a
i
l
u
r
e
:




1
.
 
S
t
o
p
 
h
e
l
m
f
i
l
e
:
 
r
e
m
o
v
e
 
a
l
l
 
r
e
l
e
a
s
e
s


2
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
 
d
a
t
a
 
f
r
o
m
 
k
8
u
p
 
s
n
a
p
s
h
o
t
s


3
.
 
R
e
-
a
p
p
l
y
 
p
r
e
v
i
o
u
s
 
h
e
l
m
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


4
.
 
V
e
r
i
f
y
 
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
 
h
e
a
l
t
h
y




-
-
-




#
#
 
M
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
 
W
i
n
d
o
w
s




#
#
#
 
S
e
m
e
s
t
e
r
 
T
r
a
n
s
i
t
i
o
n
 
(
T
e
a
c
h
i
n
g
-
f
r
e
e
 
P
e
r
i
o
d
)




T
h
e
 
b
e
s
t
 
t
i
m
e
 
f
o
r
 
m
a
j
o
r
 
u
p
g
r
a
d
e
s
 
i
s
 
d
u
r
i
n
g
 
s
e
m
e
s
t
e
r
 
b
r
e
a
k
s
 
w
h
e
n
 
t
r
a
f
f
i
c
 
i
s
 
l
o
w
e
s
t
.




#
#
#
#
 
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
 
S
c
h
e
d
u
l
e




|
 
P
e
r
i
o
d
 
|
 
A
c
t
i
v
i
t
y
 
|
 
I
m
p
a
c
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
 
2
 
w
e
e
k
s
 
b
e
f
o
r
e
 
s
e
m
e
s
t
e
r
 
|
 
T
e
s
t
 
u
p
g
r
a
d
e
s
 
i
n
 
s
t
a
g
i
n
g
 
|
 
N
o
 
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
 
i
m
p
a
c
t
 
|


|
 
L
a
s
t
 
w
e
e
k
 
o
f
 
s
e
m
e
s
t
e
r
 
b
r
e
a
k
 
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
 
u
p
g
r
a
d
e
s
 
|
 
M
i
n
i
m
a
l
 
u
s
e
r
 
i
m
p
a
c
t
 
|


|
 
F
i
r
s
t
 
w
e
e
k
 
o
f
 
s
e
m
e
s
t
e
r
 
|
 
M
o
n
i
t
o
r
,
 
r
o
l
l
b
a
c
k
 
i
f
 
n
e
e
d
e
d
 
|
 
P
e
a
k
 
t
r
a
f
f
i
c
 
|




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
d
 
D
o
w
n
t
i
m
e
 
p
e
r
 
S
e
r
v
i
c
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
 
Z
e
r
o
-
D
o
w
n
t
i
m
e
 
P
o
s
s
i
b
l
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
-
-
-
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
 
N
o
 
(
s
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
)
 
|
 
~
2
 
m
i
n
 
d
o
w
n
t
i
m
e
 
d
u
r
i
n
g
 
r
o
l
l
i
n
g
 
r
e
s
t
a
r
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
 
A
I
O
 
|
 
N
o
 
(
s
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
)
 
|
 
~
5
 
m
i
n
 
(
A
I
O
 
u
p
g
r
a
d
e
 
s
t
e
p
)
 
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
 
Y
e
s
 
(
2
 
r
e
p
l
i
c
a
s
)
 
|
 
R
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
 
Y
e
s
 
(
2
 
r
e
p
l
i
c
a
s
)
 
|
 
R
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
 
|


|
 
S
O
G
o
 
|
 
Y
e
s
 
(
2
 
r
e
p
l
i
c
a
s
)
 
|
 
R
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
 
D
e
p
e
n
d
s
 
o
n
 
S
y
n
a
p
s
e
 
r
e
p
l
i
c
a
s
 
|
 
~
1
 
m
i
n
 
|


|
 
I
L
I
A
S
 
|
 
N
o
 
(
s
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
)
 
|
 
~
2
 
m
i
n
 
|


|
 
M
o
o
d
l
e
 
|
 
Y
e
s
 
(
2
 
r
e
p
l
i
c
a
s
)
 
|
 
R
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
 
|


|
 
B
B
B
 
|
 
Y
e
s
 
(
2
 
r
e
p
l
i
c
a
s
)
 
|
 
R
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
 
Y
e
s
 
(
2
+
 
r
e
p
l
i
c
a
s
)
 
|
 
R
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
 
t
o
o
l
s
 
|
 
Y
e
s
 
|
 
N
/
A
 
|

