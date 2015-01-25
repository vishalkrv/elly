use dfs.yelp;
alter session set `store.format`='json';
create table yelp_user_userid as
select user_id as userid, fans, average_stars from `yelp_user` 
order by 2 desc limit 20;
