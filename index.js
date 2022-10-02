// This source code is subject to the terms of the Mozilla Public License 2.0 at https://mozilla.org/MPL/2.0/
// © Kamjit

//@version=5

indicator("Sahib Screener", "", true)
var string GP1 = "Volume Average"

string timeFrame  = input.string("60", "timeFrame",options=['5','10','15','30','60', 'D', 'W', 'M'], group = GP1,confirm=true)
int averagePeriod    = input.int(30, "Avg Vol", minval = 1, maxval = 100,step=1, group = GP1,confirm=true)
float averageMultiplier  = input.float(1.5, "Avg Vol Multiplier", minval = 0.1, maxval = 10.0,step=0.1, group = GP1,confirm=true)
// close > open and math.abs(open-low) > 3*math.abs(close-open) and math.abs(open-low) > math.abs(high-open) // Hammer

rsiSource = input.source(close,"RSI Source", group = GP1)
rsiLength = input.int(14,"RSI Length",step=1,group = GP1,confirm=true)

rsiOverbought = input.int(70,"RSI Overbought Level",step=1,group = GP1,confirm=true)
rsiOversold = input.int(30,"RSI Oversold Level",step=1, group = GP1,confirm=true)


rsiValue = ta.rsi(rsiSource, rsiLength)


isRsiOB = rsiValue >= rsiOverbought
isRsiOS = rsiValue <= rsiOversold


filterFunc() => volume > ta.sma(volume, averagePeriod)*averageMultiplier and (isRsiOB or isRsiOS)// and close > open



scannerArray = array.new_string()

s1 = request.security("NSE:BANKNIFTY",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "NIFTY BANK - BANKNIFTY"  : ""
s2 = request.security("NSE:NIFTY",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "NIFTY 50 - NIFTY"  : ""
s3 = request.security("NSE:ACC",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ACC LIMITED - ACC"  : ""
s4 = request.security("NSE:ACC",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ACC LIMITED - ACC"  : ""
s5 = request.security("NSE:ACC",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ACC LIMITED - ACC"  : ""
s6 = request.security("NSE:ACC",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ACC LIMITED - ACC"  : ""
s7 = request.security("NSE:ABFRL",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ADITYA BIRLA FASHION & RT - ABFRL"  : ""
s8 = request.security("NSE:IOC",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "INDIAN OIL CORP LTD - IOC"  : ""
s9 = request.security("NSE:AMBUJACEM",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "AMBUJA CEMENTS LTD - AMBUJACEM"  : ""
s10 = request.security("NSE:ASTRAL",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ASTRAL LIMITED - ASTRAL"  : ""
s11 = request.security("NSE:ABB",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ABB INDIA LIMITED - ABB"  : ""
s12 = request.security("NSE:AUBANK",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "AU SMALL FINANCE BANK LTD - AUBANK"  : ""
s13 = request.security("NSE:ADANIENT",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ADANI ENTERPRISES LIMITED - ADANIENT"  : ""
s14 = request.security("NSE:BEL",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "BHARAT ELECTRONICS LTD - BEL"  : ""
s15 = request.security("NSE:BHEL",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "BHEL - BHEL"  : ""
s16 = request.security("NSE:CHAMBLFERT",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "CHAMBAL FERTILIZERS LTD - CHAMBLFERT"  : ""
s17 = request.security("NSE:COALINDIA",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "COAL INDIA LTD - COALINDIA"  : ""
s18 = request.security("NSE:CROMPTON",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "CROMPT GREA CON ELEC LTD - CROMPTON"  : ""
s19 = request.security("NSE:DELTACORP",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "DELTA CORP LIMITED - DELTACORP"  : ""
s20 = request.security("NSE:CHOLAFIN",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "CHOLAMANDALAM IN & FIN CO - CHOLAFIN"  : ""
s21 = request.security("NSE:ABBOTINDIA",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ABBOTT INDIA LIMITED - ABBOTINDIA"  : ""
s22 = request.security("NSE:ADANIPORTS",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ADANI PORT & SEZ LTD - ADANIPORTS"  : ""
s23 = request.security("NSE:ABCAPITAL",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ADITYA BIRLA CAPITAL LTD. - ABCAPITAL"  : ""
s24 = request.security("NSE:AMARAJABAT",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "AMARA RAJA BATTERIES LTD. - AMARAJABAT"  : ""
s25 = request.security("NSE:GRASIM",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "GRASIM INDUSTRIES LTD - GRASIM"  : ""
s26 = request.security("NSE:APOLLOTYRE",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "APOLLO TYRES LTD - APOLLOTYRE"  : ""
s27 = request.security("NSE:APOLLOHOSP",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "APOLLO HOSPITALS ENTER. L - APOLLOHOSP"  : ""
s28 = request.security("NSE:ASHOKLEY",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ASHOK LEYLAND LTD - ASHOKLEY"  : ""
s29 = request.security("NSE:ASIANPAINT",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ASIAN PAINTS LIMITED - ASIANPAINT"  : ""
s30 = request.security("NSE:ATUL",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "ATUL LTD - ATUL"  : ""
s31 = request.security("NSE:IDFC",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "IDFC LIMITED - IDFC"  : ""
s32 = request.security("NSE:AUROPHARMA",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "AUROBINDO PHARMA LTD - AUROPHARMA"  : ""
s33 = request.security("NSE:INDHOTEL",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "THE INDIAN HOTELS CO. LTD - INDHOTEL"  : ""
s34 = request.security("NSE:BAJAJFINSV",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "BAJAJ FINSERV LTD. - BAJAJFINSV"  : ""
s35 = request.security("NSE:BAJFINANCE",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "BAJAJ FINANCE LIMITED - BAJFINANCE"  : ""
s36 = request.security("NSE:BAJAJ_AUTO",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "BAJAJ AUTO LIMITED"  : ""
s37 = request.security("NSE:BALRAMCHIN",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "BALRAMPUR CHINI MILLS LTD - BALRAMCHIN"  : ""
s38 = request.security("NSE:BATAINDIA",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "BATA INDIA LTD - BATAINDIA"  : ""
s39 = request.security("NSE:LALPATHLAB",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "DR. LAL PATH LABS LTD. - LALPATHLAB"  : ""
s40 = request.security("NSE:BERGEPAINT",timeFrame,filterFunc(),ignore_invalid_symbol=false)  ? "BERGER PAINTS (I) LTD - BERGEPAINT"  : ""

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
string  tableXposInput = input.string("left", "", inline = "11", options = ["left", "center", "right"], group = GP2)
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
    if barstate.islast and array.size(scannerArray) > 0
        table.cell(panel, 0, i, str.tostring(array.get(scannerArray,i-1)), bgcolor = neutColorInput)
    else if barstate.islast and array.size(scannerArray) == 0
    // Period in left column.
        table.cell(panel, 0, i, str.tostring("NO STOCKS FOUND"), bgcolor = neutColorInput)
