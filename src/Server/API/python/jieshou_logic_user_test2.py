# coding=utf-8
import json
import random
import sys
reload(sys)
import MySQLdb
sys.setdefaultencoding('utf-8')


def jieshou_logic_user_test(user,rate1,rate2,rate3,rate4,rate5,rate6,rate7,rate8,rate9,rate10,rate11,rate12,rate13,rate14,rate15):
    conn =MySQLdb.Connect(host='127.0.0.1', user='root', passwd='123456', db='gyc_f_e', port=3306, charset='utf8')
    cur = conn.cursor()



    sql3="select user_name from user_logic_finish_chapter "
    cur.execute(sql3)
    all_user_name=cur.fetchall()
    finish_flag=0
    #print(all_user_name)
    finish_user_name=[]
    for x in all_user_name:
        finish_user_name.append(x[0])
    if user not in finish_user_name:
        finish_flag=1  #新用户
        sql1_1="SELECT COUNT(*) FROM user_logic_finish_chapter"
        cur.execute(sql1_1)
        id_1=int(cur.fetchone()[0]+1)
        #print(id_1)

        sql4="insert into user_logic_finish_chapter(id,user_name) values('%d','%s') "%(id_1,user)
        cur.execute(sql4)
        conn.commit()

        #print("逻辑新用户")
    #print(finish_flag)


    zhongdian_user=[]
    if finish_flag==0:#并非逻辑新用户 之前做过水平测试

        sql1_2="select user_name from user_logic_finish_zhongdian"
        cur.execute(sql1_2)
        zhongdian_all_name=cur.fetchall()
        for x in zhongdian_all_name:
            if x[0] not in zhongdian_user:
                zhongdian_user.append(x[0])

    if user not in zhongdian_user:
        sql1="SELECT COUNT(*) FROM user_logic_shuipingceshi"
        cur.execute(sql1)
        id=int(cur.fetchone()[0]+1)
        sql2="insert into  user_logic_shuipingceshi values('%d','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')"%(id,user,rate1,rate2,rate3,rate4,rate5,rate6,rate7,rate8,rate9,rate10,rate11,rate12,rate13,rate14,rate15)
        cur.execute(sql2)
        conn.commit()
    else:
        finish_flag=2

    result={}
    result["flag"]=finish_flag #flag=1 新用户，之前未做过水平测试，更新finish_chapter表，flag=0 不是新用户，但尚未做过任一重点题目，更新水平测试表，flag=2，已做过重点，不更新水平测试表
    jsondata = json.dumps(result, ensure_ascii=False)
    print jsondata



def jieshou_logic_user_test1():
    sys.exit(jieshou_logic_user_test(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6],sys.argv[7],sys.argv[8],sys.argv[9],sys.argv[10],sys.argv[11],sys.argv[12],sys.argv[13],sys.argv[14],sys.argv[15],sys.argv[16]))
if __name__ == "__main__":

    jieshou_logic_user_test1()

    #jieshou_logic_user_test("sadkl","0.2","0.2","0.2","0.2","0.2","0.2","0.2","0.2","0.1","0.5","0.2","0.2","0.2","0.2","0.2")












