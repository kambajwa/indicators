// This source code is subject to the terms of the Mozilla Public License 2.0 at https://mozilla.org/MPL/2.0/
// © Kamjit

//@version=5

indicator("My Volume Screener", "", true)
var string GP1 = "Volume Average"

string timeFrame  = input.string("D", "timeFrame",options=['60', 'D', 'W', 'M'], group = GP1,confirm=true)
int averagePeriod    = input.int(30, "Average", minval = 1, maxval = 100,step=1, group = GP1,confirm=true)
float averageMultiplier  = input.float(1.5, "Multiplier", minval = 0.1, maxval = 10.0,step=0.1, group = GP1,confirm=true)
someFunc() => volume > ta.sma(volume, averagePeriod)*averageMultiplier

scannerArray = array.new_string()

s1 = request.security("NSE:RELIANCE",timeFrame,someFunc())  ? "reliance-industrial-infrastructure - NSE:RELIANCE"  : ""
s2 = request.security("NSE:TCS",timeFrame,someFunc())  ? "tata - NSE:TCS"  : ""
s3 = request.security("NSE:HDFCBANK",timeFrame,someFunc())  ? "hdfc-bank - NSE:HDFCBANK"  : ""
s4 = request.security("NSE:ICICIBANK",timeFrame,someFunc())  ? "icici-bank - NSE:ICICIBANK"  : ""
s5 = request.security("NSE:HINDUNILVR",timeFrame,someFunc())  ? "unilever - NSE:HINDUNILVR"  : ""
s6 = request.security("NSE:INFY",timeFrame,someFunc())  ? "infosys - NSE:INFY"  : ""
s7 = request.security("NSE:SBIN",timeFrame,someFunc())  ? "state-bank - NSE:SBIN"  : ""
s8 = request.security("NSE:BAJFINANCE",timeFrame,someFunc())  ? "bajaj-finance - NSE:BAJFINANCE"  : ""
s9 = request.security("NSE:AIRTELPP.E1",timeFrame,someFunc())  ? "airtel - NSE:AIRTELPP.E1"  : ""
s10 = request.security("NSE:HDFC",timeFrame,someFunc())  ? "housing-development - NSE:HDFC"  : ""
s11 = request.security("NSE:ADANITRANS",timeFrame,someFunc())  ? "adani-transmiss-in - NSE:ADANITRANS"  : ""
s12 = request.security("NSE:ITC",timeFrame,someFunc())  ? "itc - NSE:ITC"  : ""
s13 = request.security("NSE:ADANIENT",timeFrame,someFunc())  ? "adani - NSE:ADANIENT"  : ""
s14 = request.security("NSE:LICI",timeFrame,someFunc())  ? "life-insurance-corporation-of-india - NSE:LICI"  : ""
s15 = request.security("NSE:ATGL",timeFrame,someFunc())  ? "adani - NSE:ATGL"  : ""
s16 = request.security("NSE:KOTAKBANK",timeFrame,someFunc())  ? "kotak-mahindra-bank - NSE:KOTAKBANK"  : ""
s17 = request.security("NSE:ADANIGREEN",timeFrame,someFunc())  ? "adani - NSE:ADANIGREEN"  : ""
s18 = request.security("NSE:ASIANPAINT",timeFrame,someFunc())  ? "asian-paints - NSE:ASIANPAINT"  : ""
s19 = request.security("NSE:BAJAJFINSV",timeFrame,someFunc())  ? " - NSE:BAJAJFINSV"  : ""
s20 = request.security("NSE:MARUTI",timeFrame,someFunc())  ? "maruti-suzuki-india - NSE:MARUTI"  : ""
s21 = request.security("NSE:DMART",timeFrame,someFunc())  ? "avenue-supermarts - NSE:DMART"  : ""
s22 = request.security("NSE:LT",timeFrame,someFunc())  ? "larsen-and-toubro - NSE:LT"  : ""
s23 = request.security("NSE:AXISBANK",timeFrame,someFunc())  ? "axis-bank - NSE:AXISBANK"  : ""
s24 = request.security("NSE:HCLTECH",timeFrame,someFunc())  ? "hcl-technologies - NSE:HCLTECH"  : ""
s25 = request.security("NSE:TITAN",timeFrame,someFunc())  ? "titan-company - NSE:TITAN"  : ""
s26 = request.security("NSE:WIPRO",timeFrame,someFunc())  ? "wipro - NSE:WIPRO"  : ""
s27 = request.security("NSE:SUNPHARMA",timeFrame,someFunc())  ? "sun-pharmaceutical - NSE:SUNPHARMA"  : ""
s28 = request.security("NSE:ADANIPORTS",timeFrame,someFunc())  ? "adani - NSE:ADANIPORTS"  : ""
s29 = request.security("NSE:ULTRACEMCO",timeFrame,someFunc())  ? "ultratech-cement - NSE:ULTRACEMCO"  : ""
s30 = request.security("NSE:NESTLEIND",timeFrame,someFunc())  ? "nestle - NSE:NESTLEIND"  : ""
s31 = request.security("NSE:JSWSTEEL",timeFrame,someFunc())  ? "jsw - NSE:JSWSTEEL"  : ""
s32 = request.security("NSE:ONGC",timeFrame,someFunc())  ? "oil-and-natural-gas - NSE:ONGC"  : ""
s33 = request.security("NSE:NTPC",timeFrame,someFunc())  ? "ntpc - NSE:NTPC"  : ""
s34 = request.security("NSE:M_M",timeFrame,someFunc())  ? "mahindra - NSE:M_M"  : ""
s35 = request.security("NSE:POWERGRID",timeFrame,someFunc())  ? "power-grid - NSE:POWERGRID"  : ""
s36 = request.security("NSE:TATAMOTORS",timeFrame,someFunc())  ? "tata - NSE:TATAMOTORS"  : ""
s37 = request.security("NSE:ADANIPOWER",timeFrame,someFunc())  ? "adani-power - NSE:ADANIPOWER"  : ""
s38 = request.security("NSE:PIDILITIND",timeFrame,someFunc())  ? "pidilite - NSE:PIDILITIND"  : ""
s39 = request.security("NSE:COALINDIA",timeFrame,someFunc())  ? "coal-india - NSE:COALINDIA"  : ""
s40 = request.security("NSE:SBILIFE",timeFrame,someFunc())  ? "sbi-life-insurance - NSE:SBILIFE"  : ""

if str.length(s1)>0
    array.push(scannerArray, s1)
if str.length(s2)>0
    array.push(scannerArray, s2)
if str.length(s3)>0
    array.push(scannerArray, s3)
if str.length(s4)>0
    array.push(scannerArray, s4)
if str.length(s5)>0
    array.push(scannerArray, s5)
if str.length(s6)>0
    array.push(scannerArray, s6)
if str.length(s7)>0
    array.push(scannerArray, s7)
if str.length(s8)>0
    array.push(scannerArray, s8)
if str.length(s9)>0
    array.push(scannerArray, s9)
if str.length(s10)>0
    array.push(scannerArray, s10)
if str.length(s11)>0
    array.push(scannerArray, s11)
if str.length(s12)>0
    array.push(scannerArray, s12)
if str.length(s3)>0
    array.push(scannerArray, s13)
if str.length(s14)>0
    array.push(scannerArray, s14)
if str.length(s15)>0
    array.push(scannerArray, s15)
if str.length(s16)>0
    array.push(scannerArray, s16)
if str.length(s17)>0
    array.push(scannerArray, s17)
if str.length(s18)>0
    array.push(scannerArray, s18)
if str.length(s19)>0
    array.push(scannerArray, s19)
if str.length(s20)>0
    array.push(scannerArray, s20)
if str.length(s21)>0
    array.push(scannerArray, s21)
if str.length(s22)>0
    array.push(scannerArray, s22)
if str.length(s23)>0
    array.push(scannerArray, s23)
if str.length(s24)>0
    array.push(scannerArray, s24)
if str.length(s25)>0
    array.push(scannerArray, s25)
if str.length(s26)>0
    array.push(scannerArray, s26)
if str.length(s27)>0
    array.push(scannerArray, s27)
if str.length(s28)>0
    array.push(scannerArray, s28)
if str.length(s29)>0
    array.push(scannerArray, s29)
if str.length(s30)>0
    array.push(scannerArray, s30)
if str.length(s31)>0
    array.push(scannerArray, s31)
if str.length(s32)>0
    array.push(scannerArray, s32)
if str.length(s33)>0
    array.push(scannerArray, s33)
if str.length(s34)>0
    array.push(scannerArray, s34)
if str.length(s35)>0
    array.push(scannerArray, s35)
if str.length(s36)>0
    array.push(scannerArray, s36)
if str.length(s37)>0
    array.push(scannerArray, s37)
if str.length(s38)>0
    array.push(scannerArray, s38)
if str.length(s39)>0
    array.push(scannerArray, s39)
if str.length(s40)>0
    array.push(scannerArray, s40)



var string GP2 = "Display"
string  tableYposInput = input.string("middle", "Panel position", inline = "11", options = ["top", "middle", "bottom"], group = GP2)
string  tableXposInput = input.string("center", "", inline = "11", options = ["left", "center", "right"], group = GP2)
color   bullColorInput = input.color(color.new(color.green, 30), "Bull", inline = "12", group = GP2)
color   bearColorInput = input.color(color.new(color.red, 30), "Bear", inline = "12", group = GP2)
color   neutColorInput = input.color(color.new(color.orange, 30), "Neutral", inline = "12", group = GP2)

var table panel = table.new(tableYposInput + "_" + tableXposInput, 2, averagePeriod)
if barstate.islast
    // Table header.
    table.cell(panel, 0, 0, "Name", bgcolor = neutColorInput)
// table.cell(panel, 1, 0, symbol", bgcolor = neutColorInput)

for i = 1 to array.size(scannerArray)
// ————— Call MAs on each bar.
//float ma = ta.sma(close, period)
// ————— Only execute table code on last bar.
    if barstate.islast
    // Period in left column.
        table.cell(panel, 0, i, str.tostring(array.get(scannerArray,i-1)), bgcolor = neutColorInput)