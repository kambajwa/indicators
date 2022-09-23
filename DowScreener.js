// This source code is subject to the terms of the Mozilla Public License 2.0 at https://mozilla.org/MPL/2.0/
// © Kamjit

//@version=4
study("My Dow Screener", overlay = false)
someFunc() => close > open

s1= security("AA","D",someFunc())
s2= security("AA$B","D",someFunc())
s3= security("AAC","D",someFunc())
s4= security("AAN","D",someFunc())
s5= security("AAP","D",someFunc())
s6= security("AAT","D",someFunc())
s7= security("AAV","D",someFunc())
s8= security("AB","D",someFunc())
s9= security("ABB","D",someFunc())
s10= security("ABBV","D",someFunc())
s11= security("ABC","D",someFunc())
s12= security("ABEV","D",someFunc())
s13= security("ABG","D",someFunc())
s14= security("ABM","D",someFunc())
s15= security("ABR","D",someFunc())
s16= security("ABR$A","D",someFunc())
s17= security("ABR$B","D",someFunc())
s18= security("ABR$C","D",someFunc())
s19= security("ABRN","D",someFunc())
s20= security("ABT","D",someFunc())
s21= security("ABX","D",someFunc())
s22= security("ACC","D",someFunc())
s23= security("ACCO","D",someFunc())
s24= security("ACE","D",someFunc())

scr_label = 'Screener: \n##########\n'

scr_label := s1 ? scr_label + "AA\n" : scr_label
scr_label := s2 ? scr_label + "AA$B\n" : scr_label
scr_label := s3 ? scr_label + "AAC\n" : scr_label
scr_label := s4 ? scr_label + "AAN\n" : scr_label
scr_label := s5 ? scr_label + "AAP\n" : scr_label
scr_label := s6 ? scr_label + "AAT\n" : scr_label
scr_label := s7 ? scr_label + "AAV\n" : scr_label
scr_label := s8 ? scr_label + "AB\n" : scr_label
scr_label := s9 ? scr_label + "ABB\n" : scr_label
scr_label := s10 ? scr_label + "ABBV\n" : scr_label
scr_label := s11 ? scr_label + "ABC\n" : scr_label
scr_label := s12 ? scr_label + "ABEV\n" : scr_label
scr_label := s13 ? scr_label + "ABG\n" : scr_label
scr_label := s14 ? scr_label + "ABM\n" : scr_label
scr_label := s15 ? scr_label + "ABR\n" : scr_label
scr_label := s16 ? scr_label + "ABR$A\n" : scr_label
scr_label := s17 ? scr_label + "ABR$B\n" : scr_label
scr_label := s18 ? scr_label + "ABR$C\n" : scr_label
scr_label := s19 ? scr_label + "ABRN\n" : scr_label
scr_label := s20 ? scr_label + "ABT\n" : scr_label
scr_label := s21 ? scr_label + "ABX\n" : scr_label
scr_label := s22 ? scr_label + "ACC\n" : scr_label
scr_label := s23 ? scr_label + "ACCO\n" : scr_label
scr_label := s24 ? scr_label + "ACE\n" : scr_label
lab_l = label.new(bar_index,0,scr_label, color = color.orange, textcolor = color.black, style = label.style_labeldown,yloc = yloc.price )
label.delete(lab_l[1])
plot(0,transp = 100)
