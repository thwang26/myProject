import React from 'react';

const Salary = () => {
    return (
        <div>
            <h2>
                2023년의 최저시급은&nbsp;
                <span>9,620</span>
                입니다.
            </h2>
            시급 입력<input type='text' placeholder='시급입력'/><br/>
            하루 근무시간
            <select>
                <option>선택</option>
                <option>30분</option>
                <option>1시간</option>
                <option>1시간 30분</option>
                <option>2시간</option>
                <option>2시간 30분</option>
                <option>3시간</option>
                <option>3시간 30분</option>
                <option>4시간</option>
                <option>4시간 30분</option>
                <option>5시간</option>
                <option>5시간 30분</option>
                <option>6시간</option>
                <option>6시간 30분</option>
                <option>7시간</option>
                <option>7시간 30분</option>
                <option>8시간</option>
                <option>8시간 30분</option>
                <option>9시간</option>
                <option>9시간 30분</option>
                <option>10시간</option>
                <option>10시간 30분</option>
                <option>11시간</option>
                <option>11시간 30분</option>
                <option>12시간</option>
                <option>12시간 30분</option>
                <option>13시간</option>
                <option>13시간 30분</option>
                <option>14시간</option>
                <option>14시간 30분</option>
                <option>15시간</option>
                <option>15시간 30분</option>
                <option>16시간</option>
                <option>16시간 30분</option>
                <option>17시간</option>
                <option>17시간 30분</option>
                <option>18시간</option>
                <option>18시간 30분</option>
                <option>19시간</option>
                <option>19시간 30분</option>
                <option>20시간</option>
                <option>20시간 30분</option>
                <option>21시간</option>
                <option>21시간 30분</option>
                <option>22시간</option>
                <option>22시간 30분</option>
                <option>23시간</option>
                <option>23시간 30분</option>
                <option>24시간</option>
            </select><br/>
            일주일 근무일수
            <select>
                <option>1일</option>
                <option>2일</option>
                <option>3일</option>
                <option>4일</option>
                <option>5일</option>
                <option>6일</option>
                <option>7일</option>
            </select>
            주휴수당 포함여부
            <input type='radio'/>
            <div>포함</div>
            <input type='radio'/>
            <div>미포함</div>
            <div>계산하기</div>
        </div>
    );
};

export default Salary;