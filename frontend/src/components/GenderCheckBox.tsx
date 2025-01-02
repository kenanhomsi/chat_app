interface GenderCheckBoxProps {
    handleInputchange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const GenderCheckBox = ({ handleInputchange }: GenderCheckBoxProps) => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={'label gap-2 cursor-pointer'}>
                    <span className=" label-text">Male</span>
                    <input name="gender" value="male" onChange={handleInputchange} type='radio' className="checkbox border-slate-900" />
                </label>
            </div>
            <div className=" form-control">
                <label className={'label gap-2 cursor-pointer'}>
                    <span className=" label-text">Female</span>
                    <input name="gender" value="female" onChange={handleInputchange} type="radio" className="checkbox border-slate-900" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox