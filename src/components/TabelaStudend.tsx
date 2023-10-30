import { Student } from "@/types/Student"

type Props = {
    students: Student[];
}

export const TabelaStudend = ({ students }:Props) =>{
    
    return(
            <table className="w-full border border-gray-600 rounded-md overflow-hidden">
                <thead>
                    <tr className="text-left border-b border border-gray-600 bg-slate-800">
                        <th className="p-3 font-bold">Name</th>
                        <th className="p-3 font-bold">Status</th>
                        <th className="p-3 font-bold">Grade 1</th>
                        <th className="p-3 font-bold">Grade 2</th>
                        <th className="p-3 font-bold">Final Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(item => (
                    <tr key={item.id} className="text-left text-slate-800 bg-gray-400 p-2 border-b-2 border-b-gray-900">
                        <td className="p-3 flex items-center">
                        <div>
                            <img className="h-10 w-10 rounded-full mr-3" src={item.avatar}></img>
                        </div>
                        <div>
                            <div className="text-md font-bold">{item.name}</div>
                            <div className="text-sm">{item.email}</div>
                        </div>
                        </td>
                        <td className="p-3">
                            {item.active && <div className="px-2 py-1 inline-block bg-green-500 rounded-md border border-green-800 text-white text-xs">Active</div>}
                            {!item.active && <div className="px-2 py-1 inline-block bg-red-500 rounded-md border border-red-800 text-white text-xs">Inactive</div>}
                        </td>
                        <td className="p-3">{item.grade1.toFixed(2)}</td>
                        <td className="p-3">{item.grade2.toFixed(2)}</td>
                        <td className="text-lg p-3">
                            {item.active ? ((item.grade1 + item.grade2)/ 2 ).toFixed(2) : '--'}
                        </td>
                    </tr>
                   ))}
                </tbody>
            </table>
    );
}