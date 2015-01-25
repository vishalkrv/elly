use dfs.yelp;
alter session set `store.format`='json';
create table yelp_user_yelpingsince as
select y.`yelping_since` as yelpsignupmonth, count(*) as total_users_signed_up from `yelp_user` y 
group by y.`yelping_since` order by 1 desc;
