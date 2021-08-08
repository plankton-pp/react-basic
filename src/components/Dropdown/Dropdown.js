import "./Dropdown.css"
export default function Dropdown(){
    return(
        <>
        <select className="form-control">
                        <option value="null">เลือกภูมิภาค</option>
                        <option value="C">ภาคกลาง</option>
                        <option value="N">ภาคเหนือ</option>
                        <option value="NE">ภาคตะวันออกเฉียงเหนือ</option>
                        <option value="E">ภาคตะวันออก</option>
                        <option value="S">ภาคใต้</option>
                        <option value="W">ภาคตะวันตก</option>
                    </select>
        </>
    );
}