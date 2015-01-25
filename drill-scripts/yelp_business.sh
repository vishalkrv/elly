#!/bin/bash
# yelp_business.sh
# this will analyze yelp_user_reviews data and create a json file per column
# after going through Elly's data analyzer

#== first column is state ==
#-- cleanup
cd /mapr/demo.mapr.com/data/yelp
rm -rf yelp_business_state
#-- sql to analyze
/opt/mapr/drill/drill-0.6.0/bin/sqlline -u jdbc:drill: -f /root/yelpscripts/yelp_business_state.sql
#-- rename results and move it to target directory
mv yelp_business_state/0_0_0.json yelp_business_analyzed/yelp_business_state.json
rm -rf yelp_business_state

#== second column is state ==
#-- cleanup
cd /mapr/demo.mapr.com/data/yelp
rm -rf yelp_business_city
#-- sql to analyze
/opt/mapr/drill/drill-0.6.0/bin/sqlline -u jdbc:drill: -f /root/yelpscripts/yelp_business_city.sql
#-- rename results and move it to target directory
mv yelp_business_city/0_0_0.json yelp_business_analyzed/yelp_business_city.json
rm -rf yelp_business_city

#== third column is reviewcount ==
#-- cleanup
cd /mapr/demo.mapr.com/data/yelp
rm -rf yelp_business_reviewcount
#-- sql to analyze
/opt/mapr/drill/drill-0.6.0/bin/sqlline -u jdbc:drill: -f /root/yelpscripts/yelp_business_reviewcount.sql
#-- rename results and move it to target directory
mv yelp_business_reviewcount/0_0_0.json yelp_business_analyzed/yelp_business_reviewcount.json
rm -rf yelp_business_reviewcount

#== fourth column is category  ==
#-- cleanup
cd /mapr/demo.mapr.com/data/yelp
rm -rf yelp_business_categorycount
#-- sql to analyze
/opt/mapr/drill/drill-0.6.0/bin/sqlline -u jdbc:drill: -f /root/yelpscripts/yelp_business_categorycount.sql
#-- rename results and move it to target directory
mv yelp_business_categorycount/0_0_0.json yelp_business_analyzed/yelp_business_categorycount.json
rm -rf yelp_business_categorycount

