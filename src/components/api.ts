

interface ApiDataDisplayProps {
    api?: string // Optional title for the table
  }

  
export async function fetchApiData(
    api = "eth/v1/beacon/genesis"
  ): Promise<ApiDataDisplayProps> {
    const res = await fetch(`http://47.128.81.7:3500/${api}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 },
    })
  
    const data = await res.json()
    return data
  }

  export async function fetchValidatorApiData(
    validator_index :any
  ): Promise<ApiDataDisplayProps> {
    const res = await fetch(`http://47.128.81.7:3500/eth/v1/beacon/states/head/validators/${validator_index}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 },
    })
  
    const data = await res.json()
    return data
  }
  