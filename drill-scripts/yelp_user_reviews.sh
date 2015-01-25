#!/bin/bash
# yelp_user_reviews.sh
# this will analyze yelp_user_reviews data and create a json file per column
# after going through Elly's data analyzer

#== first column is userid ==
#-- cleanup
cd /mapr/demo.mapr.com/data/yelp
rm -rf yelp_user_reviews_userid
#-- sql to analyze
/opt/mapr/drill/drill-0.6.0/bin/sqlline -u jdbc:drill: -f /root/yelpscripts/yelp_user_reviews_userid.sql
#-- rename results and move it to target directory
mv yelp_user_reviews_userid/0_0_0.json yelp_user_reviews_analyzed/yelp_user_reviews_userid.json
rm -rf yelp_user_reviews_userid

#== second column is text  ==
#-- cleanup
cd /mapr/demo.mapr.com/data/yelp
rm -rf yelp_user_reviews_text
#-- sql to analyze
/opt/mapr/drill/drill-0.6.0/bin/sqlline -u jdbc:drill: -f /root/yelpscripts/yelp_user_reviews_text.sql
#-- rename results and move it to target directory
mv yelp_user_reviews_text/0_0_0.json yelp_user_reviews_analyzed/yelp_user_reviews_text.json
rm -rf yelp_user_reviews_text

#== third  column is businessid  ==
#-- cleanup
cd /mapr/demo.mapr.com/data/yelp
rm -rf yelp_user_reviews_businessid
#-- sql to analyze
/opt/mapr/drill/drill-0.6.0/bin/sqlline -u jdbc:drill: -f /root/yelpscripts/yelp_user_reviews_businessid.sql
#-- rename results and move it to target directory
mv yelp_user_reviews_businessid/0_0_0.json yelp_user_reviews_analyzed/yelp_user_reviews_businessid.json
rm -rf yelp_user_reviews_businessid

#== fourth  column is likes  ==
#-- cleanup
cd /mapr/demo.mapr.com/data/yelp
rm -rf yelp_user_reviews_likes
#-- sql to analyze
/opt/mapr/drill/drill-0.6.0/bin/sqlline -u jdbc:drill: -f /root/yelpscripts/yelp_user_reviews_likes.sql
#-- rename results and move it to target directory
mv yelp_user_reviews_likes/0_0_0.json yelp_user_reviews_analyzed/yelp_user_reviews_likes.json
rm -rf yelp_user_reviews_likes

#== fifth  column is date  ==
#-- cleanup
cd /mapr/demo.mapr.com/data/yelp
rm -rf yelp_user_reviews_date
#-- sql to analyze
/opt/mapr/drill/drill-0.6.0/bin/sqlline -u jdbc:drill: -f /root/yelpscripts/yelp_user_reviews_date.sql
#-- rename results and move it to target directory
mv yelp_user_reviews_date/0_0_0.json yelp_user_reviews_analyzed/yelp_user_reviews_date.json
rm -rf yelp_user_reviews_date

#== six  column is type  ==
#-- cleanup
cd /mapr/demo.mapr.com/data/yelp
rm -rf yelp_user_reviews_type
#-- sql to analyze
/opt/mapr/drill/drill-0.6.0/bin/sqlline -u jdbc:drill: -f /root/yelpscripts/yelp_user_reviews_type.sql
#-- rename results and move it to target directory
mv yelp_user_reviews_type/0_0_0.json yelp_user_reviews_analyzed/yelp_user_reviews_type.json
rm -rf yelp_user_reviews_type
