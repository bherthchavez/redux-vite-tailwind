/* eslint-disable react/prop-types */


const TextField = ({label, inputProps, onChange, value}) => {
  return (
    <div className="flex flex-col ">
        <label className="mb-2 text-base">{label}</label>
        <input className="bg-slate-300 rounded mb-5 py-2 px-4 text-gray-900 focus:outline-none font-semibold"
        {...inputProps}
        onChange={onChange}
        value={value}
        />
    </div>
  )
}

export default TextField

