async function sample() {
    intermediate_result = await fetch('https://dev-apl-cms.pantheonsite.io/api/events')
    actual_values = await intermediate_result.json()
    console.log(actual_values)
}

sample()