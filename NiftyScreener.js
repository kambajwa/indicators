// This source code is subject to the terms of the Mozilla Public License 2.0 at https://mozilla.org/MPL/2.0/
// © Kamjit

//@version=4
study("My Nifty Screener", overlay = false)

period = input(title="Period", type=input.integer,defval=30, minval=5, maxval=500, step=1, confirm=true)
multiplier = input(title="Multiplier",type= input.float,defval=0.2, minval=0.0, maxval=10.0, step=0.5, confirm=true)

someFunc() => volume > sma(volume, period)*multiplier
s1 = security("APOLLOHOSP","D",someFunc())
s2 = security("ASIANPAINT","D",someFunc())
s3 = security("AXISBANK","D",someFunc())
s5 = security("BAJFINANCE","D",someFunc())
s6 = security("BAJAJFINSV","D",someFunc())
s7 = security("BPCL","D",someFunc())
s8 = security("BHARTIARTL","D",someFunc())
s9 = security("BRITANNIA","D",someFunc())
s10 = security("CIPLA","D",someFunc())
s11 = security("COALINDIA","D",someFunc())
s12 = security("DIVISLAB","D",someFunc())
s13 = security("DRREDDY","D",someFunc())
s14 = security("EICHERMOT","D",someFunc())
s15 = security("GRASIM","D",someFunc())
s16 = security("HCLTECH","D",someFunc())
s17 = security("HDFCBANK","D",someFunc())
s18 = security("HDFCLIFE","D",someFunc())
s19 = security("HEROMOTOCO","D",someFunc())
s20 = security("HINDALCO","D",someFunc())
s21 = security("HINDUNILVR","D",someFunc())
s22 = security("HDFC","D",someFunc())
s23 = security("ICICIBANK","D",someFunc())
s24 = security("ITC","D",someFunc())
s25 = security("INDUSINDBK","D",someFunc())
s26 = security("INFY","D",someFunc())
s27 = security("JSWSTEEL","D",someFunc())
s28 = security("KOTAKBANK","D",someFunc())
s29 = security("LT","D",someFunc())
s31 = security("MARUTI","D",someFunc())
s32 = security("NTPC","D",someFunc())
s33 = security("NESTLEIND","D",someFunc())
s34 = security("ONGC","D",someFunc())
s35 = security("POWERGRID","D",someFunc())
s36 = security("RELIANCE","D",someFunc())
s37 = security("SBILIFE","D",someFunc())
s38 = security("SHREECEM","D",someFunc())
s39 = security("SBIN","D",someFunc())

scr_label = 'Screener: \n##########\n'

scr_label  := s1 ? scr_label +  "APOLLOHOSP\n" : scr_label
scr_label  := s2 ? scr_label +  "ASIANPAINT\n" : scr_label
scr_label  := s3 ? scr_label +  "AXISBANK\n" : scr_label
scr_label  := s5 ? scr_label +  "BAJFINANCE\n" : scr_label
scr_label  := s6 ? scr_label +  "BAJAJFINSV\n" : scr_label
scr_label  := s7 ? scr_label +  "BPCL\n" : scr_label
scr_label  := s8 ? scr_label +  "BHARTIARTL\n" : scr_label
scr_label  := s9 ? scr_label +  "BRITANNIA\n" : scr_label
scr_label  := s10 ? scr_label +  "CIPLA\n" : scr_label
scr_label  := s11 ? scr_label +  "COALINDIA\n" : scr_label
scr_label  := s12 ? scr_label +  "DIVISLAB\n" : scr_label
scr_label  := s13 ? scr_label +  "DRREDDY\n" : scr_label
scr_label  := s14 ? scr_label +  "EICHERMOT\n" : scr_label
scr_label  := s15 ? scr_label +  "GRASIM\n" : scr_label
scr_label  := s16 ? scr_label +  "HCLTECH\n" : scr_label
scr_label  := s17 ? scr_label +  "HDFCBANK\n" : scr_label
scr_label  := s18 ? scr_label +  "HDFCLIFE\n" : scr_label
scr_label  := s19 ? scr_label +  "HEROMOTOCO\n" : scr_label
scr_label  := s20 ? scr_label +  "HINDALCO\n" : scr_label
scr_label  := s21 ? scr_label +  "HINDUNILVR\n" : scr_label
scr_label  := s22 ? scr_label +  "HDFC\n" : scr_label
scr_label  := s23 ? scr_label +  "ICICIBANK\n" : scr_label
scr_label  := s24 ? scr_label +  "ITC\n" : scr_label
scr_label  := s25 ? scr_label +  "INDUSINDBK\n" : scr_label
scr_label  := s26 ? scr_label +  "INFY\n" : scr_label
scr_label  := s27 ? scr_label +  "JSWSTEEL\n" : scr_label
scr_label  := s28 ? scr_label +  "KOTAKBANK\n" : scr_label
scr_label  := s29 ? scr_label +  "LT\n" : scr_label
scr_label  := s31 ? scr_label +  "MARUTI\n" : scr_label
scr_label  := s32 ? scr_label +  "NTPC\n" : scr_label
scr_label  := s33 ? scr_label +  "NESTLEIND\n" : scr_label
scr_label  := s34 ? scr_label +  "ONGC\n" : scr_label
scr_label  := s35 ? scr_label +  "POWERGRID\n" : scr_label
scr_label  := s36 ? scr_label +  "RELIANCE\n" : scr_label
scr_label  := s37 ? scr_label +  "SBILIFE\n" : scr_label
scr_label  := s38 ? scr_label +  "SHREECEM\n" : scr_label
scr_label  := s39 ? scr_label +  "SBIN\n" : scr_label

lab_l = label.new(bar_index,0,scr_label, color = color.orange, textcolor = color.black, style = label.style_labeldown,yloc = yloc.price )
label.delete(lab_l[1])
plot(0,transp = 100)