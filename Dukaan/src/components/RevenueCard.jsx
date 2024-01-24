export const RevenueCard=(title,ordercount,amount)=>{
    return (
        <div className="bg-white shadow-sm">
            <div>{title}</div>
            <div className="flex justify-between">
                <div>{amount}</div>
                {ordercount ?<div> {ordercount}order(s){">"}
                </div>:null}
            </div>
        </div>
    )
}