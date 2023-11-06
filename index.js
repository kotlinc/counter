let amount = 0;

const add = (amt) => amount += amt
const remove = (amt) => amount -= amt

const save = () => localStorage.setItem('amount', amount)
const load = () => {
  amount = Number(localStorage.getItem('amount'))
}
const wipe = () => localStorage.setItem('amount', 0)

$('#add').on('click', () => {
  const amt = Number(prompt("How much to add?"))
  add(amt)

  $('#amt').text(amount || (() => {
    wipe()
    load()
    return amount
  })())
  save()
})

$('#remove').on('click', () => {
  const amt = Number(prompt("How much to remove?"))
  remove(amt)

  $('#amt').text(amount || (() => {
    wipe()
    load()
    return amount
  })())
  save()
})

load()
$('#amt').text(amount || (() => {
  wipe()
  load()
  return amount
})())
save()
