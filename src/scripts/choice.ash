void main(int choice, string page)
{
	if (choice == 218) {	
		// Try again next round.
		set_property("_cognac_doCompost", "");

		wait(60);
	}
	if (choice == 216 && get_property("_cognac_doCompost") != "") {
		run_choice(1);
		set_property("_cognac_doCompost", "");
		set_property("_cognac_choice216", "");
	} 
}