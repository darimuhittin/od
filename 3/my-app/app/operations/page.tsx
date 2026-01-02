
import prisma from '@/lib/prisma'
import OperationCard from '@/components/OperationCard'

const Operations = async () => {

    const operations = await prisma.operations.findMany({
        orderBy: { id: 'desc' } // Assuming we might want latest first, if field exists. If not, remove orderBy or check schema.
    })

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Operation History</h1>
                    <p className="text-slate-500 mt-1">View all past calculation records and results.</p>
                </div>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200">
                    Export Data
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {operations.map((operation: any) => (
                    <OperationCard key={operation.id} operation={operation} />
                ))}
            </div>

            {operations.length === 0 && (
                <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
                    <p className="text-slate-500">No operations found.</p>
                </div>
            )}
        </div>
    )
}

export default Operations