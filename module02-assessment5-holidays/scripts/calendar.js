//Use a combination of your choice of loops and a switch case statement to display holidays for each month of the year on a web page. You need a minimum of 2 holidays per month. (January might be New Years Day and Martin Luther King Day)
//Use a loop for months, either numbers or month names
// Use a switch based on the month to display the variable

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


let calendar = "";

for (let x in months) {
  let holidays ="";
  month = (months[x])
  
  switch (month) {
    case "January":
      holidays = "<ul>" +
                 "<li>New Years Day - January 1</li>" +
                 "<li>Anniversary of the promulgation of the Emancipation Proclamation by Abraham Lincoln - January 1 (1863)</li>" +
                 "<li>Anniversary of the Battle of Princeton - January 3 (1777)</li>" +
                 "<li>Martin Luther King, Jr's Birthday - January 15 (1929)</li>" +
                 "<li>Martin Luther King, Jr. Day (Observed) - Third Monday of January</li>" +
                 "<li>Inauguration Day - January 20 (every 4 years)</li>" +
                 "<li>International Holocaust Remembrance Day (commemorating the liberation of Auschwitz) - January 27 (1945)</li>" +
                 "<li>Franklin Delano Roosevelt's Birthday - January 30 (1882)" +
                 "</ul>";
      break;
    case "February":
      holidays = "<ul>" +
                 "<li>Abraham Lincoln's Birthday - February 12 (1809)</li>" +
                 "<li>St. Valentine's Day - February 14</li>" +
                 "<li>Susan B. Anthony Day - February 15 (1820)</li>" +
                 "<li>President's Day (Observed) - Third Monday of February (usually between Lincoln and Washington's birthdays on the 12th and 22nd respectively)</li>" +
                 "<li>George Washington's Birthday - February 22 (1732)</li>" +
                 "</ul>";
      break;
    case "March":
      holidays = "<ul>" +
                "<li>Dr. Suess's Birthday - March 2 (1904)</li>" +
                "<li>Former Inauguration Day (before the adoption of the 20th Amendment in 1933) - March 4</li>" + 
                "<li>Anniversary of the Boston Massacre - March 5</li>" +
                "<li>The Ides of March (Anniversary of the assassination of Julius Caesar) - March 15</li>" +
                "<li>St. Patrick's Day - March 17</li>" +
                "<li>Feast of St. Joseph - March 19</li>" +
                "<li>Vernal Equinox/First Day of Spring - March 20</li>" +
                "<li>The One Ring is Destroyed in the fires of Mt. Doom - March 25 (3019 of the Third Age of Middle Earth)</li>" +
                "</ul>";
      break;
    case "April":
      holidays = "<ul>" +
                 "<li>April Fools Day - April 1</li>" +
                 "<li>Anniversary of the assassination of Martin Luther King, Jr. - April 4 (1968)</li>" +
                 "<li>Anniversary of Robert E. Lee's surrrender at Appomattox (End of the Civil War) - April 9 (1865)</li>" +
                 "<li>Anniversary of the Fall of Fort Sumter (Start of Civil War) - April 12 (1861)</li>" +
                 "<li>Thomas Jefferson's birthday - April 13 (1743)</li>" +
                 "<li>Anniversary of the Assassination of Abraham Lincoln - April 14 (1865)</li>" +
                 "<li>Tax Day - April 15</li>" +
                 "<li>Patriots' Day (commemorating the Battles of Lexington & Concord and the start of the American Revolutionary War) - April 19 (1775)</li>" +
                 "</ul>";
      break;
    case "May":
      holidays = "<ul>" +
                 "<li>Anniversary of the Battle of Hogwarts - May 2 (1998)</li>" +
                 "<li>May the Fourth (Star Wars Day) - May 4</li>" +
                 "<li>Cinco de Mayo - May 5</li>" +
                 "<li>V-E Day (Victory in Europe) - May 8 (1945)</li>" +
                 "<li>Mother's Day - second Sunday in May</li>" +
                 "<li>Anniversary of the original Star Wars premiere - May 25 (1977)</li>" +
                 "<li>Memorial Day - Last Monday in May</li>" +
                 "</ul>";
      break;
    case "June":
      holidays = "<ul>" +
                "<li>Anniversary of the Battle of Midway - June 4-7 (1942)" +
                "<li>Anniversary of D-Day (the Allied invasion of Normandy during World War II) - June 6 (1944)</li>" +
                 "<li>Flag Day - June 14</li>" +
                 "<li>Anniversary of the Battle of Bunker Hill - June 17 (1775)" +
                 "<li>Anniversary of the Battle of Waterloo, Napoleon's final defeat - June 19 (1815)</li>" +
                 "<li>Juneteenth - June 19 (1865)</li>" +
                 "<li>Summer Solstice (First Day of Summer) - June 20/21" +
                 "<li>Father's Day - third Sunday in June</li>" +
                 "</ul>";
      break;
    case "July":
      holidays = "<ul>" +
                "<li>Anniversary of the Battle of Gettysburg - July 1-3 (1863)</li>" +
                "<li>Anniversary of the vote by the Second Continental Congress asserting that \"these united colonies are and of right to be free and independent states\" effectively declaring American independence - July 2 (1776)</li>" +
                "<li>Independence Day (commemorating the adoption of the Declaration of Independence by the Continental Congress)- July 4 (1776)</li>" +
                "<li>Anniversary of the Deaths of John Adams and Thomas Jefferson on the 50th anniversary of the adoption of the Declaration of Indepdencence - July 4 (1826)</li>" +
                "<li>Anniversary of the fall of Vicksburg - July 4 (1863)</li>" +
                "<li>Anniversary of the death of Alexander Hamilton in his dual with Aaron Burr - July 12 (1804)</li>" +
                "<li>Bastille Day (France) - July 14 (1789)</li>" +
                "<li>Captain Picard Day - July 16 (2370)</li>" +
                "<li>Anniversary of the Apollo Moon Landing - July 20 (1969)</li>" +
                "<li>Harry Potter's Birthday - July 31 (1980)</li>" +
                "</ul>";
      break;
    case "August":
        holidays = "<ul>" +
                    "<li>Anniversary of the Gulf of Tonkin Resolution which gave President Lyndon Johnson authority to increase American involvement in the Vietnam War - August 7 (1964)</li>" +
                    "<li>Anniversary of Richard Nixon's resignation of the presidency in the shadow of the Watergate Scandal - August 9 (1974)</li>" +
                    "<li>V-J Day (Victory in the Pacific in World War II) - August 15</li>" +
                    "<li>Anniversary of the Woodstock Music Festival - August 15-18 (1969)" +
                    "<li>Anniversary of Martin Luther King's \"I Have a Dream\" speech - August 28 (1963)" +
                    "</ul>"
        break
    case "September":
         holidays = "<ul>" +
                    "<li>Labor Day - First Monday in September</li>" +
                    "<li>9/11 Remembrance Day - September 11 (2001)</li>" +
                    "<li>Constitution Day commemorating the signing the Constitution - September 17 (1787)</li>" +
                    "<li>Anniversary of the Battle of Antietam (1862)</li>" +
                    "<li>Talk Like a Pirate Day - September 19</li>" +
                    "<li>Anniversary of the issuance of the preliminary Emancipation Proclamation by Abraham Lincoln - September 22 (1862)</li>" +
                    "<li>Autumnal Equinox (First Day of Fall) - September 22/23</li></li>" +
                    "<li>Anniversary of the beginning of the Siege of Yorktown - September 28 (1781)</li>" +
                    "</ul>"; 
         break
    case "October":
         holidays = "<ul>" +
                    "<li>Leif Erikson Day - October 9</li>" +
                    "<li>Columbus Day - October 12 (1492) (observed on the second Monday of October)</li>" +
                    "<li>Anniversary of the Battle of Hastings, William the Conqueror's victory leading to Norman rule in England - October 14 (1066)" +
                    "<li>Anniversary of the American victory at the Battles of Saratoga - October 17 (1777)</li>" +
                    "<li>Anniversary of the British surrender at Yorktown (End of the Revolutionary War) - October 19 (1781)" +
                    "<li>Anniversary of the Battle of Leyte Gulf - October 23-26 (1944)</li>" +
                    "<li>Theodore Roosevelt's Birthday - October 27 (1858)</li>" +
                    "<li>Anniversary of Black Tuesday, the day Wall Street crashed and ushered in the Great Depression - October 29 (1929)</li>" +
                    "<li>Halloween - October 31" +
                    "</ul>"
         break
    case "November":
         holidays = "<ul>" +
                    "<li>All Saints' Day - November 1</li>" +
                    "<li>Election Day - Tuesday after the first Monday in November (every two years)</li>" +
                    "<li>Anniversary of the Fall of the Berlin Wall - November 9 (1989)</li>"+
                    "<li>Veteran's Day/Armistice Day - November 11 (1918)</li>" +
                    "<li>Anniversay of Lincoln's delivery of the Gettysburg Address - November 19 (1863)</li>" +
                    "<li>Anniversary of the Assassination of John F. Kennedy - November 22 (1963)</li>" +
                    "<li>Thanksgiving Day - Fourth Thursday in November</li>" +
                    "</ul>"
         break
    case "December":
         holidays = "<ul>" +
                    "<li>Repeal Day (Anniversary of the 21st Amendment repealing Prohibition) - December 5 (1933)</li>" +
                    "<li>St. Nicholas Day - December 6</li>" +
                    "<li>Pearl Harbor Remembrance Day - December 7 (1941)</li>" +
                    "<li>Feast of Our Lady of Guadalupe - December 12 </li>" +
                    "<li>Anniversary of the death of George Washington - December 14 (1799)</li>" +
                    "<li>Bill of Rights Day commemorating the ratification of the first ten amendments of the Constitution - December 15 (1791)</li>" +
                    "<li>Anniversary of the Boston Tea Party - December 16 (1773)</li>" +
                    "<li>Winter Solstice (Start of Winter) - December 20</li>" +
                    "<li>Christmas Eve - December 24</li>" +
                    "<li>Christmas - December 25</li>" +
                    "<li>Anniversary of Washington's Crossing of the Delaware and the Battle of Trenton - December 25-26 (1776)</li>" +
                    "<li>Anniversery of the premiere of Gary Larson's <i>Far Side</i> - December 31 (1979)</li>" +
                    "<li>New Year's Eve - December 31</li>" +
                    "</ul>"
         break
    // 
  }calendar += `<h2>${month}</h2><p>${holidays}</p><br>`;
    }

document.getElementById("calendar").innerHTML = calendar