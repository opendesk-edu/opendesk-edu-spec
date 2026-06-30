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
 
a
n
d
 
A
l
e
r
t
i
n
g




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
,
 
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
,
 
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
 
a
l
e
r
t
 
r
o
u
t
i
n
g
,


S
e
r
v
i
c
e
M
o
n
i
t
o
r
s
,
 
a
n
d
 
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
R
u
l
e
s
 
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
 
D
e
f
i
n
e
s


S
L
O
s
,
 
a
l
e
r
t
i
n
g
 
t
i
e
r
s
,
 
a
n
d
 
d
a
s
h
b
o
a
r
d
 
r
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
 
v
i
s
i
b
i
l
i
t
y
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
 
L
o
g
 
a
g
g
r
e
g
a
t
i
o
n
 
(
L
o
k
i
/
P
r
o
m
t
a
i
l
 
—
 
s
e
p
a
r
a
t
e
 
s
t
a
c
k
)


-
 
U
p
t
i
m
e
 
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
 
(
e
x
t
e
r
n
a
l
:
 
k
u
v
a
s
z
-
u
p
t
i
m
e
)


-
 
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
 
P
e
r
f
o
r
m
a
n
c
e
 
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
 
(
A
P
M
 
—
 
n
o
t
 
d
e
p
l
o
y
e
d
)




-
-
-




#
#
 
A
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




`
`
`


S
e
r
v
i
c
e
s
 
─
─
m
e
t
r
i
c
s
─
─
>
 
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
 
─
─
r
u
l
e
s
─
─
>
 
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
 
─
─
>
 
N
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
 
C
h
a
n
n
e
l
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
│


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
└
─
─
s
c
r
a
p
e
─
─
>
 
G
r
a
f
a
n
a
 
D
a
s
h
b
o
a
r
d
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
│


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
└
─
─
 
S
e
r
v
i
c
e
M
o
n
i
t
o
r
s
 
(
a
u
t
o
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
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
└
─
─
 
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
R
u
l
e
s
 
(
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


`
`
`




#
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
 
S
t
a
c
k




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
 
|
 
`
k
u
b
e
-
p
r
o
m
e
t
h
e
u
s
-
s
t
a
c
k
`
 
H
e
l
m
 
c
h
a
r
t
 
|
 
S
c
r
a
p
e
s
 
a
l
l
 
S
e
r
v
i
c
e
M
o
n
i
t
o
r
s
 
|


|
 
G
r
a
f
a
n
a
 
|
 
`
k
u
b
e
-
p
r
o
m
e
t
h
e
u
s
-
s
t
a
c
k
`
 
G
r
a
f
a
n
a
 
s
u
b
-
c
h
a
r
t
 
|
 
P
r
e
-
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
 
|


|
 
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
 
|
 
`
k
u
b
e
-
p
r
o
m
e
t
h
e
u
s
-
s
t
a
c
k
`
 
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
 
|
 
R
o
u
t
e
s
 
a
l
e
r
t
s
 
t
o
 
e
m
a
i
l
/
w
e
b
h
o
o
k
 
|


|
 
S
e
r
v
i
c
e
M
o
n
i
t
o
r
s
 
|
 
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
 
C
R
D
 
r
e
s
o
u
r
c
e
s
 
|
 
A
u
t
o
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
 
o
f
 
m
e
t
r
i
c
s
 
e
n
d
p
o
i
n
t
s
 
|


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
R
u
l
e
s
 
|
 
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
 
C
R
D
 
r
e
s
o
u
r
c
e
s
 
|
 
A
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
 
|




-
-
-




#
#
 
S
L
O
s
 
(
S
e
r
v
i
c
e
 
L
e
v
e
l
 
O
b
j
e
c
t
i
v
e
s
)




|
 
S
e
r
v
i
c
e
 
|
 
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
 
|
 
L
a
t
e
n
c
y
 
(
p
9
5
)
 
|
 
E
r
r
o
r
 
R
a
t
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
 
K
e
y
c
l
o
a
k
 
|
 
9
9
.
9
%
 
|
 
<
 
5
0
0
m
s
 
(
t
o
k
e
n
 
e
n
d
p
o
i
n
t
)
 
|
 
<
 
0
.
1
%
 
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
 
|
 
9
9
.
9
%
 
|
 
<
 
2
s
 
(
f
i
l
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
)
 
|
 
<
 
0
.
5
%
 
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
/
S
O
G
o
 
|
 
9
9
.
9
%
 
|
 
<
 
3
s
 
(
m
a
i
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
s
)
 
|
 
<
 
0
.
5
%
 
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
 
9
9
.
5
%
 
|
 
<
 
5
0
0
m
s
 
(
A
P
I
)
 
|
 
<
 
1
%
 
|


|
 
I
L
I
A
S
/
M
o
o
d
l
e
 
|
 
9
9
.
5
%
 
|
 
<
 
3
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
 
<
 
1
%
 
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
 
9
9
.
5
%
 
|
 
<
 
1
s
 
(
U
I
 
a
c
t
i
o
n
s
)
 
|
 
<
 
1
%
 
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
 
9
9
.
5
%
 
|
 
<
 
5
s
 
(
d
o
c
u
m
e
n
t
 
l
o
a
d
)
 
|
 
<
 
1
%
 
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
e
r
v
i
c
e
s
 
|
 
9
9
%
 
|
 
<
 
5
s
 
|
 
<
 
2
%
 
|




-
-
-




#
#
 
A
l
e
r
t
i
n
g
 
T
i
e
r
s




#
#
#
 
T
i
e
r
 
1
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
P
a
g
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
)




|
 
A
l
e
r
t
 
|
 
C
o
n
d
i
t
i
o
n
 
|
 
S
e
v
e
r
i
t
y
 
|
 
R
e
s
p
o
n
s
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
D
o
w
n
 
|
 
`
u
p
{
j
o
b
=
"
k
e
y
c
l
o
a
k
"
}
 
=
=
 
0
`
 
f
o
r
 
5
m
 
|
 
C
r
i
t
i
c
a
l
 
|
 
I
m
m
e
d
i
a
t
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
s
D
o
w
n
 
|
 
`
p
g
_
u
p
 
=
=
 
0
`
 
f
o
r
 
5
m
 
|
 
C
r
i
t
i
c
a
l
 
|
 
I
m
m
e
d
i
a
t
e
 
|


|
 
M
a
r
i
a
D
B
D
o
w
n
 
|
 
`
m
y
s
q
l
_
u
p
 
=
=
 
0
`
 
f
o
r
 
5
m
 
|
 
C
r
i
t
i
c
a
l
 
|
 
I
m
m
e
d
i
a
t
e
 
|


|
 
R
e
d
i
s
D
o
w
n
 
|
 
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
 
f
o
r
 
5
m
 
|
 
C
r
i
t
i
c
a
l
 
|
 
I
m
m
e
d
i
a
t
e
 
|


|
 
C
e
p
h
C
l
u
s
t
e
r
E
r
r
o
r
 
|
 
`
c
e
p
h
_
h
e
a
l
t
h
_
s
t
a
t
u
s
 
!
=
 
0
`
 
f
o
r
 
5
m
 
|
 
C
r
i
t
i
c
a
l
 
|
 
I
m
m
e
d
i
a
t
e
 
|


|
 
I
n
g
r
e
s
s
D
o
w
n
 
|
 
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
 
f
o
r
 
2
m
 
|
 
C
r
i
t
i
c
a
l
 
|
 
I
m
m
e
d
i
a
t
e
 
|


|
 
A
l
l
P
o
d
s
C
r
a
s
h
i
n
g
 
|
 
`
k
u
b
e
_
p
o
d
_
s
t
a
t
u
s
_
p
h
a
s
e
{
p
h
a
s
e
=
"
R
u
n
n
i
n
g
"
}
 
=
=
 
0
`
 
f
o
r
 
a
n
y
 
s
e
r
v
i
c
e
 
|
 
C
r
i
t
i
c
a
l
 
|
 
I
m
m
e
d
i
a
t
e
 
|


|
 
C
e
r
t
E
x
p
i
r
y
 
|
 
`
p
r
o
b
e
_
s
s
l
_
e
a
r
l
i
e
s
t
_
c
e
r
t
_
e
x
p
i
r
y
 
<
 
7
`
 
d
a
y
s
 
|
 
C
r
i
t
i
c
a
l
 
|
 
W
i
t
h
i
n
 
2
4
h
 
|




#
#
#
 
T
i
e
r
 
2
:
 
W
a
r
n
i
n
g
 
(
I
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
 
w
i
t
h
i
n
 
1
 
h
o
u
r
)




|
 
A
l
e
r
t
 
|
 
C
o
n
d
i
t
i
o
n
 
|
 
S
e
v
e
r
i
t
y
 
|
 
R
e
s
p
o
n
s
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
|


|
 
H
i
g
h
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
 
|
 
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
 
9
0
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
 
|
 
W
a
r
n
i
n
g
 
|
 
1
 
h
o
u
r
 
|


|
 
H
i
g
h
C
P
U
T
h
r
o
t
t
l
i
n
g
 
|
 
`
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
)
 
>
 
5
0
%
`
 
f
o
r
 
1
0
m
 
|
 
W
a
r
n
i
n
g
 
|
 
1
 
h
o
u
r
 
|


|
 
P
o
d
R
e
s
t
a
r
t
i
n
g
 
|
 
`
r
a
t
e
(
k
u
b
e
_
p
o
d
_
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
s
t
a
t
u
s
_
r
e
s
t
a
r
t
s
_
t
o
t
a
l
)
 
>
 
0
.
1
`
 
(
6
+
/
h
o
u
r
)
 
|
 
W
a
r
n
i
n
g
 
|
 
1
 
h
o
u
r
 
|


|
 
P
V
C
A
l
m
o
s
t
F
u
l
l
 
|
 
`
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
a
v
a
i
l
a
b
l
e
_
b
y
t
e
s
 
<
 
1
0
%
`
 
o
f
 
c
a
p
a
c
i
t
y
 
|
 
W
a
r
n
i
n
g
 
|
 
1
 
h
o
u
r
 
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
s
H
i
g
h
 
|
 
`
p
g
_
s
t
a
t
_
a
c
t
i
v
i
t
y
_
c
o
u
n
t
 
>
 
8
0
%
`
 
o
f
 
m
a
x
_
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
 
W
a
r
n
i
n
g
 
|
 
1
 
h
o
u
r
 
|


|
 
B
a
c
k
u
p
F
a
i
l
e
d
 
|
 
`
k
8
u
p
_
b
a
c
k
u
p
_
f
a
i
l
e
d
_
t
o
t
a
l
 
>
 
0
`
 
f
o
r
 
l
a
t
e
s
t
 
r
u
n
 
|
 
W
a
r
n
i
n
g
 
|
 
1
 
h
o
u
r
 
|


|
 
O
I
D
C
A
u
t
h
F
a
i
l
u
r
e
s
 
|
 
`
r
a
t
e
(
k
e
y
c
l
o
a
k
_
l
o
g
i
n
s
_
f
a
i
l
e
d
_
t
o
t
a
l
)
 
>
 
1
0
/
m
i
n
`
 
f
o
r
 
1
0
m
 
|
 
W
a
r
n
i
n
g
 
|
 
1
 
h
o
u
r
 
|




#
#
#
 
T
i
e
r
 
3
:
 
I
n
f
o
 
(
R
e
v
i
e
w
 
d
u
r
i
n
g
 
b
u
s
i
n
e
s
s
 
h
o
u
r
s
)




|
 
A
l
e
r
t
 
|
 
C
o
n
d
i
t
i
o
n
 
|
 
S
e
v
e
r
i
t
y
 
|
 
R
e
s
p
o
n
s
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
|


|
 
H
i
g
h
L
a
t
e
n
c
y
 
|
 
`
h
i
s
t
o
g
r
a
m
_
q
u
a
n
t
i
l
e
(
0
.
9
5
,
 
r
a
t
e
(
h
t
t
p
_
r
e
q
u
e
s
t
_
d
u
r
a
t
i
o
n
_
s
e
c
o
n
d
s
_
b
u
c
k
e
t
)
)
 
>
 
5
s
`
 
|
 
I
n
f
o
 
|
 
N
e
x
t
 
b
u
s
i
n
e
s
s
 
d
a
y
 
|


|
 
S
3
B
u
c
k
e
t
G
r
o
w
t
h
 
|
 
`
c
e
p
h
_
r
g
w
_
u
s
a
g
e
_
b
y
t
e
s
`
 
g
r
o
w
i
n
g
 
>
 
1
0
G
B
/
d
a
y
 
|
 
I
n
f
o
 
|
 
N
e
x
t
 
b
u
s
i
n
e
s
s
 
d
a
y
 
|


|
 
P
o
d
C
o
u
n
t
C
h
a
n
g
e
d
 
|
 
`
k
u
b
e
_
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
_
s
t
a
t
u
s
_
r
e
p
l
i
c
a
s
 
!
=
 
k
u
b
e
_
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
_
s
p
e
c
_
r
e
p
l
i
c
a
s
`
 
|
 
I
n
f
o
 
|
 
N
e
x
t
 
b
u
s
i
n
e
s
s
 
d
a
y
 
|


|
 
H
e
l
m
R
e
l
e
a
s
e
D
r
i
f
t
 
|
 
A
r
g
o
C
D
 
`
h
e
a
l
t
h
.
s
t
a
t
u
s
 
!
=
 
"
H
e
a
l
t
h
y
"
`
 
|
 
I
n
f
o
 
|
 
N
e
x
t
 
b
u
s
i
n
e
s
s
 
d
a
y
 
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
M
o
n
i
t
o
r
s
 
(
I
n
s
t
r
u
m
e
n
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
)




T
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
 
e
x
p
o
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
 
m
e
t
r
i
c
s
 
v
i
a
 
S
e
r
v
i
c
e
M
o
n
i
t
o
r
 
C
R
D
s
:




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
e
t
r
i
c
s
 
P
a
t
h
 
|
 
P
o
r
t
 
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
 
`
/
c
o
o
l
/
g
e
t
M
e
t
r
i
c
s
`
 
|
 
9
9
8
0
 
|
 
D
o
c
u
m
e
n
t
 
c
o
u
n
t
,
 
a
c
t
i
v
e
 
u
s
e
r
s
,
 
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
/
m
e
t
r
i
c
s
`
 
|
 
9
2
0
5
 
|
 
V
i
a
 
s
e
p
a
r
a
t
e
 
e
x
p
o
r
t
e
r
 
(
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
-
e
x
p
o
r
t
e
r
`
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
 
`
/
m
e
t
r
i
c
s
`
 
|
 
9
2
0
5
 
|
 
P
u
s
h
 
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
 
m
e
t
r
i
c
s
 
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
/
m
e
t
r
i
c
s
`
 
|
 
8
0
8
0
 
|
 
L
o
g
i
n
 
c
o
u
n
t
s
,
 
t
o
k
e
n
 
s
t
a
t
s
,
 
r
e
a
l
m
 
h
e
a
l
t
h
 
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
 
`
/
m
e
t
r
i
c
s
`
 
|
 
8
0
8
0
 
|
 
P
o
r
t
a
l
 
r
e
q
u
e
s
t
 
m
e
t
r
i
c
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
 
`
/
m
e
t
r
i
c
s
`
 
|
 
1
0
2
5
4
 
|
 
R
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
s
,
 
e
r
r
o
r
 
c
o
d
e
s
,
 
b
a
c
k
e
n
d
 
h
e
a
l
t
h
 
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
 
`
/
m
e
t
r
i
c
s
`
 
|
 
9
1
8
7
 
|
 
`
p
o
s
t
g
r
e
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
 
—
 
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
,
 
l
o
c
k
s
,
 
r
e
p
l
i
c
a
t
i
o
n
 
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
 
`
/
m
e
t
r
i
c
s
`
 
|
 
9
1
0
4
 
|
 
`
m
a
r
i
a
d
b
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
 
—
 
q
u
e
r
i
e
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
,
 
r
e
p
l
i
c
a
t
i
o
n
 
|


|
 
R
e
d
i
s
 
|
 
`
/
m
e
t
r
i
c
s
`
 
|
 
9
1
2
1
 
|
 
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
 
—
 
m
e
m
o
r
y
,
 
k
e
y
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
 
|


|
 
M
i
n
I
O
 
|
 
`
/
m
i
n
i
o
/
v
2
/
m
e
t
r
i
c
s
/
c
l
u
s
t
e
r
`
 
|
 
9
0
0
0
 
|
 
B
u
c
k
e
t
 
u
s
a
g
e
,
 
A
P
I
 
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
,
 
h
e
a
l
t
h
 
|


|
 
C
e
p
h
 
|
 
N
/
A
 
|
 
N
/
A
 
|
 
`
c
e
p
h
-
m
g
r
`
 
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
o
d
u
l
e
 
|


|
 
N
o
d
e
 
E
x
p
o
r
t
e
r
 
|
 
`
/
m
e
t
r
i
c
s
`
 
|
 
9
1
0
0
 
|
 
C
P
U
,
 
m
e
m
o
r
y
,
 
d
i
s
k
,
 
n
e
t
w
o
r
k
 
p
e
r
 
n
o
d
e
 
|


|
 
k
u
b
e
-
s
t
a
t
e
-
m
e
t
r
i
c
s
 
|
 
`
/
m
e
t
r
i
c
s
`
 
|
 
8
0
8
0
 
|
 
P
o
d
/
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
P
V
C
 
s
t
a
t
u
s
 
|




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
s
 
W
I
T
H
O
U
T
 
S
e
r
v
i
c
e
M
o
n
i
t
o
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
 
G
a
p
 
|
 
M
i
t
i
g
a
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
 
N
o
 
m
e
t
r
i
c
s
 
e
n
d
p
o
i
n
t
 
|
 
M
o
n
i
t
o
r
 
v
i
a
 
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
 
+
 
l
o
g
s
 
|


|
 
M
o
o
d
l
e
 
|
 
N
o
 
m
e
t
r
i
c
s
 
e
n
d
p
o
i
n
t
 
|
 
M
o
n
i
t
o
r
 
v
i
a
 
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
 
+
 
l
o
g
s
 
|


|
 
B
B
B
 
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
 
N
o
 
m
e
t
r
i
c
s
 
e
n
d
p
o
i
n
t
 
|
 
M
o
n
i
t
o
r
 
v
i
a
 
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
 
+
 
l
o
g
s
 
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
 
I
n
t
e
r
n
a
l
 
m
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
 
M
o
n
i
t
o
r
 
v
i
a
 
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


|
 
S
O
G
o
 
|
 
N
o
 
m
e
t
r
i
c
s
 
e
n
d
p
o
i
n
t
 
|
 
M
o
n
i
t
o
r
 
v
i
a
 
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
 
+
 
l
o
g
s
 
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
 
a
v
a
i
l
a
b
l
e
 
|
 
D
e
p
l
o
y
 
`
s
y
n
a
p
s
e
-
e
x
p
o
r
t
e
r
`
 
|


|
 
Z
a
m
m
a
d
 
|
 
N
o
 
m
e
t
r
i
c
s
 
e
n
d
p
o
i
n
t
 
|
 
M
o
n
i
t
o
r
 
v
i
a
 
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
 
+
 
l
o
g
s
 
|




-
-
-




#
#
 
G
r
a
f
a
n
a
 
D
a
s
h
b
o
a
r
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
d
 
D
a
s
h
b
o
a
r
d
s




|
 
D
a
s
h
b
o
a
r
d
 
|
 
P
u
r
p
o
s
e
 
|
 
S
o
u
r
c
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
|


|
 
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
 
O
v
e
r
v
i
e
w
*
*
 
|
 
C
l
u
s
t
e
r
 
h
e
a
l
t
h
,
 
n
o
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
t
a
t
u
s
 
|
 
C
u
s
t
o
m
 
+
 
k
u
b
e
-
p
r
o
m
e
t
h
e
u
s
-
s
t
a
c
k
 
|


|
 
*
*
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
*
*
 
|
 
K
e
y
c
l
o
a
k
 
l
o
g
i
n
 
r
a
t
e
s
,
 
f
a
i
l
u
r
e
s
,
 
t
o
k
e
n
 
s
t
a
t
s
,
 
r
e
a
l
m
 
h
e
a
l
t
h
 
|
 
C
u
s
t
o
m
 
|


|
 
*
*
F
i
l
e
 
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
 
f
i
l
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
,
 
s
t
o
r
a
g
e
 
u
s
a
g
e
,
 
S
3
 
m
e
t
r
i
c
s
 
|
 
C
u
s
t
o
m
 
|


|
 
*
*
G
r
o
u
p
w
a
r
e
*
*
 
|
 
O
X
/
S
O
G
o
 
m
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
 
r
a
t
e
s
,
 
I
M
A
P
/
S
M
T
P
 
l
a
t
e
n
c
y
 
|
 
C
u
s
t
o
m
 
|


|
 
*
*
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
*
*
 
|
 
I
L
I
A
S
,
 
M
o
o
d
l
e
,
 
B
B
B
 
a
c
t
i
v
e
 
u
s
e
r
s
,
 
c
o
u
r
s
e
 
a
c
c
e
s
s
 
p
a
t
t
e
r
n
s
 
|
 
C
u
s
t
o
m
 
|


|
 
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
/
M
a
r
i
a
D
B
 
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
,
 
q
u
e
r
y
 
p
e
r
f
o
r
m
a
n
c
e
,
 
r
e
p
l
i
c
a
t
i
o
n
 
l
a
g
 
|
 
p
o
s
t
g
r
e
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
 
/
 
m
a
r
i
a
d
b
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
 
|
 
C
e
p
h
 
h
e
a
l
t
h
,
 
P
V
C
 
u
s
a
g
e
,
 
M
i
n
I
O
 
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
,
 
n
e
t
w
o
r
k
 
t
r
a
f
f
i
c
 
|
 
C
u
s
t
o
m
 
|


|
 
*
*
B
a
c
k
u
p
*
*
 
|
 
k
8
u
p
 
b
a
c
k
u
p
 
s
t
a
t
u
s
,
 
r
e
s
t
i
c
 
s
n
a
p
s
h
o
t
s
,
 
s
t
o
r
a
g
e
 
g
r
o
w
t
h
 
|
 
C
u
s
t
o
m
 
|


|
 
*
*
H
A
P
r
o
x
y
*
*
 
|
 
R
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
s
,
 
e
r
r
o
r
 
c
o
d
e
s
,
 
b
a
c
k
e
n
d
 
h
e
a
l
t
h
,
 
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




#
#
#
 
D
a
s
h
b
o
a
r
d
 
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




D
a
s
h
b
o
a
r
d
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
 
C
o
n
f
i
g
M
a
p
s
 
o
r
 
t
h
e
 
`
g
r
a
f
a
n
a
-
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
`
 
H
e
l
m
 
c
h
a
r
t
.


T
h
e
y
 
u
s
e
 
t
h
e
 
`
g
r
a
f
a
n
a
_
d
a
s
h
b
o
a
r
d
`
 
l
a
b
e
l
 
f
o
r
 
a
u
t
o
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
:


`
`
`
y
a
m
l


l
a
b
e
l
s
:


 
 
g
r
a
f
a
n
a
_
d
a
s
h
b
o
a
r
d
:
 
"
1
"


`
`
`




-
-
-




#
#
 
N
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
 
C
h
a
n
n
e
l
s




|
 
C
h
a
n
n
e
l
 
|
 
U
s
e
 
C
a
s
e
 
|
 
C
o
n
f
i
g
 
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
 
E
m
a
i
l
 
|
 
T
i
e
r
 
1
 
+
 
T
i
e
r
 
2
 
a
l
e
r
t
s
 
|
 
S
M
T
P
 
v
i
a
 
P
o
s
t
f
i
x
 
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
s
y
s
t
e
m
@
<
d
o
m
a
i
n
>
`
)
 
|


|
 
W
e
b
h
o
o
k
 
|
 
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
 
w
i
t
h
 
t
i
c
k
e
t
i
n
g
/
C
h
a
t
 
|
 
C
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
 
|


|
 
S
l
a
c
k
/
M
a
t
t
e
r
m
o
s
t
 
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
 
|
 
T
i
e
r
 
2
 
+
 
T
i
e
r
 
3
 
|
 
W
e
b
h
o
o
k
 
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
 
|




#
#
#
 
A
l
e
r
t
 
R
o
u
t
i
n
g




`
`
`
y
a
m
l


r
o
u
t
e
:


 
 
g
r
o
u
p
_
b
y
:
 
[
'
a
l
e
r
t
n
a
m
e
'
,
 
'
s
e
r
v
i
c
e
'
]


 
 
g
r
o
u
p
_
w
a
i
t
:
 
3
0
s


 
 
g
r
o
u
p
_
i
n
t
e
r
v
a
l
:
 
5
m


 
 
r
e
p
e
a
t
_
i
n
t
e
r
v
a
l
:
 
4
h


 
 
r
e
c
e
i
v
e
r
:
 
'
e
m
a
i
l
-
c
r
i
t
i
c
a
l
'


 
 
r
o
u
t
e
s
:


 
 
 
 
-
 
m
a
t
c
h
:


 
 
 
 
 
 
 
 
s
e
v
e
r
i
t
y
:
 
c
r
i
t
i
c
a
l


 
 
 
 
 
 
r
e
c
e
i
v
e
r
:
 
'
e
m
a
i
l
-
c
r
i
t
i
c
a
l
'


 
 
 
 
 
 
r
e
p
e
a
t
_
i
n
t
e
r
v
a
l
:
 
1
h


 
 
 
 
-
 
m
a
t
c
h
:


 
 
 
 
 
 
 
 
s
e
v
e
r
i
t
y
:
 
w
a
r
n
i
n
g


 
 
 
 
 
 
r
e
c
e
i
v
e
r
:
 
'
e
m
a
i
l
-
w
a
r
n
i
n
g
'


 
 
 
 
 
 
r
e
p
e
a
t
_
i
n
t
e
r
v
a
l
:
 
4
h


 
 
 
 
-
 
m
a
t
c
h
:


 
 
 
 
 
 
 
 
s
e
v
e
r
i
t
y
:
 
i
n
f
o


 
 
 
 
 
 
r
e
c
e
i
v
e
r
:
 
'
e
m
a
i
l
-
i
n
f
o
'


 
 
 
 
 
 
r
e
p
e
a
t
_
i
n
t
e
r
v
a
l
:
 
2
4
h


`
`
`




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




A
l
e
r
t
s
 
S
H
A
L
L
 
r
e
s
p
e
c
t
 
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
 
w
i
n
d
o
w
s
 
t
o
 
a
v
o
i
d
 
f
a
l
s
e
 
p
o
s
i
t
i
v
e
s
 
d
u
r
i
n
g


p
l
a
n
n
e
d
 
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
.




#
#
#
 
P
r
o
c
e
d
u
r
e




1
.
 
C
r
e
a
t
e
 
a
 
S
i
l
e
n
c
e
 
i
n
 
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
:


 
 
 
`
`
`
b
a
s
h


 
 
 
a
m
t
o
o
l
 
s
i
l
e
n
c
e
 
a
d
d
 
-
-
d
u
r
a
t
i
o
n
 
2
h
 
-
-
c
o
m
m
e
n
t
 
"
P
l
a
n
n
e
d
 
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
"
 
-
-
m
a
t
c
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
=
"
<
s
e
r
v
i
c
e
>
"


 
 
 
`
`
`


2
.
 
N
o
t
i
f
y
 
s
t
a
k
e
h
o
l
d
e
r
s
 
b
e
f
o
r
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
 
w
i
n
d
o
w


3
.
 
V
e
r
i
f
y
 
a
l
e
r
t
s
 
r
e
s
u
m
e
 
a
f
t
e
r
 
s
i
l
e
n
c
e
 
e
x
p
i
r
e
s


4
.
 
R
u
n
 
p
o
s
t
-
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
 
c
h
e
c
k
l
i
s
t




-
-
-




#
#
 
M
e
t
r
i
c
s
 
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
 
M
e
t
r
i
c
 
T
y
p
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
|


|
 
H
i
g
h
-
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
 
(
r
a
w
)
 
|
 
1
5
 
d
a
y
s
 
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
 
T
S
D
B
 
|


|
 
M
e
d
i
u
m
-
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
 
(
5
m
)
 
|
 
3
0
 
d
a
y
s
 
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
 
T
S
D
B
 
|


|
 
L
o
w
-
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
 
(
1
h
)
 
|
 
9
0
 
d
a
y
s
 
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
 
T
S
D
B
 
(
v
i
a
 
`
t
h
a
n
o
s
`
 
o
r
 
`
p
r
o
m
e
t
h
e
u
s
`
 
c
o
m
p
a
c
t
i
o
n
)
 
|


|
 
A
l
e
r
t
 
h
i
s
t
o
r
y
 
|
 
9
0
 
d
a
y
s
 
|
 
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
 
|

