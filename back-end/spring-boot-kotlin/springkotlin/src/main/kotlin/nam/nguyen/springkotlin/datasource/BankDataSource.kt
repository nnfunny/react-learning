package nam.nguyen.springkotlin.datasource

import nam.nguyen.springkotlin.model.Bank

interface BankDataSource {
    fun retrieveBanks(): Collection<Bank>
}