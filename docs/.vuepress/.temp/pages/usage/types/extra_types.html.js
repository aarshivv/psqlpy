import comp from "/Users/aleksandrkiselev/Projects/qaspen-python/psqlpy/docs/.vuepress/.temp/pages/usage/types/extra_types.html.vue"
const data = JSON.parse("{\"path\":\"/usage/types/extra_types.html\",\"title\":\"Extra Types\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Extra Types\",\"description\":\"PSQLPy has additional types due to the inability to accurately recognize the type passed from Python. All extra types available from Python with mapping to PostgreSQL type and R...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://qaspen-python.github.io/psqlpy-docs/usage/types/extra_types.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"PSQLPy\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Extra Types\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"PSQLPy has additional types due to the inability to accurately recognize the type passed from Python. All extra types available from Python with mapping to PostgreSQL type and R...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Extra Types\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"BigInt & Integer & SmallInt & Float32 & Float64\",\"slug\":\"bigint-integer-smallint-float32-float64\",\"link\":\"#bigint-integer-smallint-float32-float64\",\"children\":[]},{\"level\":2,\"title\":\"PyVarChar & PyText\",\"slug\":\"pyvarchar-pytext\",\"link\":\"#pyvarchar-pytext\",\"children\":[]},{\"level\":2,\"title\":\"PyJSON & PyJSONB\",\"slug\":\"pyjson-pyjsonb\",\"link\":\"#pyjson-pyjsonb\",\"children\":[]},{\"level\":2,\"title\":\"PyMacAddr6 & PyMacAddr8\",\"slug\":\"pymacaddr6-pymacaddr8\",\"link\":\"#pymacaddr6-pymacaddr8\",\"children\":[]}],\"filePathRelative\":\"usage/types/extra_types.md\",\"autoDesc\":true,\"excerpt\":\"<p>PSQLPy has additional types due to the inability to accurately recognize the type passed from Python.</p>\\n<p>All extra types available from Python with mapping to PostgreSQL type and Rust type.</p>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\\"text-align:center\\\">PSQLPy type</th>\\n<th style=\\\"text-align:center\\\">PostgreSQL type</th>\\n<th style=\\\"text-align:center\\\">Rust Type</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\\"text-align:center\\\">BigInt</td>\\n<td style=\\\"text-align:center\\\">BigInt</td>\\n<td style=\\\"text-align:center\\\">i64</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">Integer</td>\\n<td style=\\\"text-align:center\\\">Integer</td>\\n<td style=\\\"text-align:center\\\">i32</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">SmallInt</td>\\n<td style=\\\"text-align:center\\\">SmallInt</td>\\n<td style=\\\"text-align:center\\\">i16</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">Float32</td>\\n<td style=\\\"text-align:center\\\">FLOAT4</td>\\n<td style=\\\"text-align:center\\\">f32</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">Float64</td>\\n<td style=\\\"text-align:center\\\">FLOAT8</td>\\n<td style=\\\"text-align:center\\\">f64</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">PyVarChar</td>\\n<td style=\\\"text-align:center\\\">VarChar</td>\\n<td style=\\\"text-align:center\\\">String</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">PyText</td>\\n<td style=\\\"text-align:center\\\">Text</td>\\n<td style=\\\"text-align:center\\\">String</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">PyJSON</td>\\n<td style=\\\"text-align:center\\\">JSON</td>\\n<td style=\\\"text-align:center\\\">serde::Value</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">PyJSONB</td>\\n<td style=\\\"text-align:center\\\">JSONB</td>\\n<td style=\\\"text-align:center\\\">serde::Value</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">PyMacAddr6</td>\\n<td style=\\\"text-align:center\\\">MacAddr</td>\\n<td style=\\\"text-align:center\\\">MacAddr6</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">PyMacAddr8</td>\\n<td style=\\\"text-align:center\\\">MacAddr8</td>\\n<td style=\\\"text-align:center\\\">MacAddr8</td>\\n</tr>\\n</tbody>\\n</table>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
