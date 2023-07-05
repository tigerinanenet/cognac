void main(int choice, string page)
{
	if (choice == 218) {
		set_property("_cognac_choice216", to_int(get_property("_cognac_choice216")) + 1);
		
		// Try again next round.
		set_property("_cognac_doCompost", "");

		wait(75);
	}
	if (choice == 216 && get_property("_cognac_doCompost") != "") {
		run_choice(1);
		set_property("_cognac_doCompost", "");
	} 
}