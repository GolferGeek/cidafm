import { createClient } from '@supabase/supabase-js'

type AFMType = 'response' | 'state' | 'execution'

interface AFM {
  id: number
  type: AFMType
  prefix: string
  description: string
  is_original: boolean
  name: string
}

interface AFMsByType {
  [key: string]: AFM[]
}

type TypeMappings = Record<AFMType, string>

export default async function AFMsPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  
  const { data: afms, error } = await supabase
    .from('afms')
    .select('*')
    .order('prefix')

  if (error) {
    console.error('Error fetching AFMs:', error)
    return <div>Error loading AFMs</div>
  }

  const afmsByType = (afms as AFM[]).reduce<AFMsByType>((acc, afm) => {
    if (!acc[afm.type]) {
      acc[afm.type] = []
    }
    acc[afm.type].push(afm)
    return acc
  }, {})

  const typeOrder: AFMType[] = ['response', 'state', 'execution']
  const typeNames: TypeMappings = {
    response: 'Response Modifiers',
    state: 'State AFMs',
    execution: 'Execution Commands'
  }
  const typeDescriptions: TypeMappings = {
    response: 'Modify the current response format or structure',
    state: 'Persistently modify conversation behavior',
    execution: 'Perform specific actions when invoked'
  }
  const prefixSymbols: TypeMappings = {
    response: '^',
    state: '&',
    execution: '!'
  }

  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Available AFMs
        </h1>
        <p className="mt-6 text-xl leading-8">
          Browse all available AI Function Modules (AFMs) in the cidafm framework.
        </p>

        <div className="mt-8 flex gap-2 items-center text-sm text-gray-500">
          <span className="font-mono">^&! </span>
          <span>= Symbols used to invoke AFMs</span>
        </div>

        {typeOrder.map(type => (
          <div key={type} className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {typeNames[type]}
            </h2>
            <p className="mt-4 text-gray-600">
              {typeDescriptions[type]}
            </p>
            <div className="mt-8 space-y-8">
              {afmsByType[type]?.map(afm => (
                <div 
                  key={afm.id} 
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <span className="font-mono">{prefixSymbols[type]}{afm.name}</span>
                      </h3>
                      <p className="mt-2 text-gray-600">
                        {afm.description}
                      </p>
                    </div>
                    {afm.is_original && (
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        Original
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 bg-indigo-50 border-l-4 border-indigo-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-indigo-800">Add Your Own AFM</h3>
              <div className="mt-2 text-sm text-indigo-700">
                <p>Have an idea for a new AFM? We&apos;re always looking to expand our collection with useful additions. Contact us to contribute!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 