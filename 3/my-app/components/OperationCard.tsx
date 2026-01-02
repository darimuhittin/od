import React from 'react'

const OperationCard = ({ operation }: { operation: any }) => {
    // Determine icon and color based on operator
    const getIcon = (op: string) => {
        switch (op) {
            case '+': return { icon: 'PLUS', color: 'bg-emerald-100 text-emerald-600' };
            case '-': return { icon: 'MINUS', color: 'bg-rose-100 text-rose-600' };
            case 'x': return { icon: 'X', color: 'bg-amber-100 text-amber-600' };
            case '/': return { icon: '/', color: 'bg-blue-100 text-blue-600' };
            default: return { icon: '?', color: 'bg-slate-100 text-slate-600' };
        }
    }

    const { icon, color } = getIcon(operation.operator);

    return (
        <div className='group relative overflow-hidden bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-indigo-100'>
            {/* Background decoration */}
            <div className={`absolute top-0 right-0 p-16 -mr-8 -mt-8 rounded-full opacity-10 transition-transform group-hover:scale-110 ${color.split(' ')[0]}`}></div>

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${color}  mr-2`}>
                        {icon}
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                        Operation #{operation.id}
                    </span>
                </div>

                <div className="space-y-1">
                    <p className="text-sm font-medium text-slate-500">User</p>
                    <p className="text-lg font-semibold text-slate-900 truncate">{operation.name}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-2xl font-mono font-medium text-slate-700">
                        <span>{operation.first}</span>
                        <span className="text-slate-400">{operation.operator}</span>
                        <span>{operation.second}</span>
                    </div>
                    <div className="text-3xl font-bold text-indigo-600">
                        = {operation.result}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OperationCard