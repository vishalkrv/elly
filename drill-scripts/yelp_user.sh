#!/bin/bash
# yelp_user.sh
# this will analyze yelp_user_reviews data and create a json file per column
# after going through Elly's data analyzer

#== first column is yelping_since ==
#-- cleanup
cd /mapr/demo.mapr.com/data/yelp
rm -rf yelp_user_yelpingsince
#-- sql to analyze
/opt/mapr/drill/drill-0.6.0/bin/sqlline -u jdbc:drill: -f /root/yelpscripts/yelp_user_yelpingsince.sql
#-- rename results and move it to target directory
mv yelp_user_yelpingsince/0_0_0.json yelp_user_analyzed/yelp_user_yelpingsince.json
rm -rf yelp_user_yelpingsince

#== second column is reviewcount  ==
#-- cleanup
cd /mapr/demo.mapr.com/data/yelp
rm -rf yelp_user_reviewcount
#-- sql to analyze
/opt/mapr/drill/drill-0.6.0/bin/sqlline -u jdbc:drill: -f /root/yelpscripts/yelp_user_reviewcount.sql
#-- rename results and move it to target directory
mv yelp_user_reviewcount/0_0_0.json yelp_user_analyzed/yelp_user_reviewcount.json
rm -rf yelp_user_reviewcount

#== third column is userid  ==
#-- cleanup
cd /mapr/demo.mapr.com/data/yelp
rm -rf yelp_user_userid
#-- sql to analyze
/opt/mapr/drill/drill-0.6.0/bin/sqlline -u jdbc:drill: -f /root/yelpscripts/yelp_user_userid.sql
#-- rename results and move it to target directory
mv yelp_user_userid/0_0_0.json yelp_user_analyzed/yelp_user_userid.json
rm -rf yelp_user_userid
